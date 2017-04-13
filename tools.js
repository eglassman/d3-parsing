//npm module dependences
const fs = require('fs');
const parse5 = require('parse5');
const options = { locationInfo: true };
const esprima = require('esprima');
const traverse = require("ast-traverse");
const utils = require('parse5-utils');
const escodegen = require('escodegen');
//local dependencies
const main = require('./main.js');

function is_valid_semantic_tag(tag) {
	for (var i = 0; i < main.FUNCTION_NAMES.length; i++) {
		if (main.FUNCTION_NAMES[i].toLowerCase() == tag.toLowerCase()) {
			return true;
		}
	}
	return false;
}

module.exports = {
	process_file : function(file_loc) {
		var result = "";
		var html_content = fs.readFileSync(file_loc, 'utf8');
		var parsed_html = parse5.parse(html_content, options);
		var parsed_html_flattened = utils.flatten(parsed_html);
		var js_content = "";

		for (var i in parsed_html_flattened) {
			var tag = parsed_html_flattened[i];
			var loc = tag['__location'];
			if (tag.nodeName == 'script') {
				if (loc.startTag.endOffset == loc.endTag.startOffset){
					//then this script tag has no textcontents; print the whole thing
					//console.log('no contents', html_content.slice(loc.startOffset, loc.endOffset));
				} else {
					js_content += "\n" + html_content.slice(loc.startTag.endOffset, loc.endTag.startOffset);
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
			if (!main.INCLUDE_FUNCTION_NAME) {
				start = node.callee.range[1];
			}
			end = node.range[1];
			if (parent.type == "MemberExpression") {
				//start = Math.min(start, parent.range[0]);
				//end = Math.max(end, parent.range[1]);
			}
			raw = js_content.slice(start, end);
			if (main.HIDE_INNER_FUNCTIONS) {
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
};