var ast = require("esprima").parse("var line = d3.line()\n.x(function(d) { return x(d.date); })\n.y(function(d) { return y(d.close); });");

var traverse = require("ast-traverse");

traverse(ast, {pre: function(node, parent, prop, idx) {
	x = "";
	if (node.callee != undefined) {
		if (node.callee.object != undefined) {
			x = node.callee.object.name;
		}
	}
    console.log(node.type + (parent ? " from parent " + parent.type +
        " via " + prop + (idx !== undefined ? "[" + idx + "]" : "") : "") + "  " + x);
}});
console.log();