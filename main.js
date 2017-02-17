var esprima = require('esprima');
var traverse = require("ast-traverse");

var parsedd3 = esprima.parse('var arc = d3.arc().outerRadius(radius - 10).innerRadius(radius - 70).context(context); var labelArc = d3.arc().outerRadius(radius - 40).innerRadius(radius - 40).context(context);', { range: true, loc: true });

traverse(parsedd3, {pre: function(node, parent, prop, idx) {
    console.log(node.type + (parent ? " from parent " + parent.type +
        " via " + prop + (idx !== undefined ? "[" + idx + "]" : "") : ""));
    if (node.type == "CallExpression"){
    	console.log('check me out!');
    	console.log(node.range);
    	console.log(node.callee.property.name);
    }    
}});
