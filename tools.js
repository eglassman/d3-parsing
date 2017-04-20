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
		if (!fs.existsSync(file_loc)) {
			return null;
		}
		var result = "";
		var html_content = fs.readFileSync(file_loc, 'utf8');

		try {
			var parsed_html = parse5.parse(html_content, options);
			var parsed_html_flattened = utils.flatten(parsed_html);
			var js_content = "";

			for (var i in parsed_html_flattened) {
				var tag = parsed_html_flattened[i];
				var loc = tag['__location'];
				if (tag.nodeName == 'script') {
					if (loc.startTag.endOffset != loc.endTag.startOffset){
						js_content += "\n" + html_content.slice(loc.startTag.endOffset, loc.endTag.startOffset);
					}
				}
			}		
		    var parsed_d3 = esprima.parse(js_content, { range: true });
		}
		catch(err) {
		    return null;
		}

		traverse(parsed_d3, {pre: function(node, parent, prop, idx) {
			if (parent != null && parent.type == "MemberExpression") {
				return;
			}
			if (node.type != "CallExpression") {
				return;
			}
			if (node.callee.property === undefined) {
				return;
			}
			grand_callee = node.callee;
			while (grand_callee.object.type == "CallExpression") {
				grand_callee = grand_callee.object.callee;
				if (grand_callee.object === undefined) {
					return;
				}
			}
			if (grand_callee.object.name != "d3") {
				return;
			}
			semantic_tag = grand_callee.property.name;
			if (!is_valid_semantic_tag(semantic_tag)) {
				return;
			}
			start = node.range[0];
			if (!main.INCLUDE_FUNCTION_NAME) {
				start = node.callee.range[1];
			}
			end = node.range[1];
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