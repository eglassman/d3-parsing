//npm module dependences
const fs = require('fs');
const esprima = require('esprima');
const traverse = require("ast-traverse");
const htmlparser = require("htmlparser");
const sys = require("util");
const utils = require('parse5-utils');
const parse5 = require('parse5');
const options = { locationInfo: true };

//read in file of interest
var d3index = fs.readFileSync('../d3-example-viz/data/htmlfiles/index-239.html','utf8')
console.log(d3index)

//parse the html
var parsedd3index = parse5.parse(d3index,options);

var parsedd3index_flattened = utils.flatten(parsedd3index);

for (var i in parsedd3index_flattened) {
  console.log('-------');
  console.log(parsedd3index_flattened[i].nodeName);
  console.log(parsedd3index_flattened[i]['__location']); //.startOffset,parsedd3index_flattened[i].nodeName['__location'].endOffset));
  var loc = parsedd3index_flattened[i]['__location'];
  if (loc) {
    console.log(d3index.slice(loc.startOffset,loc.endOffset));
  }
  console.log('-------');
}

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
