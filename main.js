//npm module dependences
const fs = require('fs');
const path = require('path');
const esprima = require('esprima');
const traverse = require("ast-traverse");
const utils = require('parse5-utils');
const parse5 = require('parse5');
const escodegen = require('escodegen');
const options = { locationInfo: true };

var input_folder_loc = "Samples/";
var output_file_loc = "output.js";
var FUNCTION_NAMES = [process.argv[2]];
var INCLUDE_FUNCTION_NAME = (process.argv[3].toLowerCase() == 'true');
var HIDE_INNER_FUNCTIONS = (process.argv[4].toLowerCase() == 'true');
var output = "";

function NodeWrapper (node, parent) {
	this.node = node;
	this.parent = parent;
}

function is_valid_semantic_tag(tag) {
	for (var i = 0; i < FUNCTION_NAMES.length; i++) {
		if (FUNCTION_NAMES[i].toLowerCase() == tag.toLowerCase()) {
			return true;
		}
	}
	return false;
}

function process_file(file_loc) {
	var result = "";
	//read in file of interest
	var html_content = fs.readFileSync(file_loc, 'utf8');
	//parse the html
	var parsed_html = parse5.parse(html_content, options);
	var parsed_html_flattened = utils.flatten(parsed_html);

	for (var i in parsed_html_flattened) {
		var tag = parsed_html_flattened[i];
		var loc = tag['__location'];
		if (tag.nodeName == 'script') {
			if (loc.startTag.endOffset == loc.endTag.startOffset){
				//then this script tag has no textcontents; print the whole thing
				//console.log('no contents', html_content.slice(loc.startOffset, loc.endOffset));
			} else {
				var js_content = html_content.slice(loc.startTag.endOffset, loc.endTag.startOffset);
			}
		}
	}

	var parsed_d3 = esprima.parse(js_content, { range: true, loc: true });

	traverse(parsed_d3, {pre: function(node, parent, prop, idx) {

		if (node.type != "CallExpression") {
			return;
		}
		if (node.callee.property === undefined) {
			return;
		}
		if (node.callee.object.name != "d3") {
			return;
		}
		semantic_tag = node.callee.property.name;
		if (!is_valid_semantic_tag(semantic_tag)) {
			return;
		}
		start = node.range[0];
		end = node.range[1];
		if (parent.type == "MemberExpression") {
			//start = Math.min(start, parent.range[0]);
			//end = Math.max(end, parent.range[1]);
		}
		raw = js_content.slice(start, end);
		if (HIDE_INNER_FUNCTIONS) {
			for (var i = node.arguments.length - 1; i >= 0; i--) {
				argument = node.arguments[i];
				if (argument.type != "FunctionExpression") {
					continue;
				}
				r = argument.body.range;
				raw = raw.slice(0, r[0] - start) + "{...}" + raw.slice(r[1] - start);
			}
		}
		result += raw.trim() + "\n";
	}});
	return result;
}

var tags = JSON.parse(fs.readFileSync('tags.json', 'utf8'));
if (tags.hasOwnProperty(FUNCTION_NAMES[0])) {
	FUNCTION_NAMES = tags[FUNCTION_NAMES[0]];
}

var samples = fs.readdirSync(input_folder_loc).filter(file => fs.statSync(path.join(input_folder_loc, file)).isDirectory());

samples.forEach(function(sample_folder) {
	sample_loc = input_folder_loc + sample_folder + '/index.html';
	result = process_file(sample_loc);
	if (result.length > 0) {
		output += "# File: " + sample_folder + "\n";
		output += result;
	}
});

fs.writeFile(output_file_loc, output, function(err) {
    if(err) {
        return console.log(err);
    }
    console.log("The file was saved at " + output_file_loc + "!");
});