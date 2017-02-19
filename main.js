var esprima = require('esprima');
var traverse = require("ast-traverse");

var d3codeAsString = 'var arc = d3.arc().outerRadius(radius - 10).innerRadius(radius - 70).context(context); var labelArc = d3.arc().outerRadius(radius - 40).innerRadius(radius - 40).context(context);';

var parsedd3 = esprima.parse(d3codeAsString, { range: true, loc: true });

traverse(parsedd3, {pre: function(node, parent, prop, idx) {
    //console.log(node.type + (parent ? " from parent " + parent.type + " via " + prop + (idx !== undefined ? "[" + idx + "]" : "") : ""));
    if (node.type == "CallExpression"){
    	console.log('check me out!');
    	console.log(node.range);
    	console.log(node.callee.property.name);
    	console.log(d3codeAsString.slice(node.range[0],node.range[1]))
    }    
}});
