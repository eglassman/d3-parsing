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

for (var i in parsedd3index.childNodes) {
    console.log('-------');
    console.log('i',i);
    console.log('node',parsedd3index.childNodes[i]);
    console.log('nodename',parsedd3index.childNodes[i].nodeName);
    console.log('loc',parsedd3index.childNodes[i]['__location']); //.startOffset,parsedd3index_flattened[i].nodeName['__location'].endOffset));
    var iloc = parsedd3index.childNodes[i]['__location'];
    if (iloc) {
        console.log('extracted',d3index.slice(iloc.startOffset,iloc.endOffset));
    } else {
        for (var ii in parsedd3index.childNodes[i].childNodes) {
            console.log('ii',ii);
            console.log('node',parsedd3index.childNodes[i].childNodes[ii]);
            console.log('nodename',parsedd3index.childNodes[i].childNodes[ii].nodeName);
            console.log('loc',parsedd3index.childNodes[i].childNodes[ii]['__location']);
            var iiloc = parsedd3index.childNodes[i].childNodes[ii]['__location'];
            if (iiloc) {
                console.log('extracted',d3index.slice(iiloc.startOffset,iiloc.endOffset));
            } else {
                for (var iii in parsedd3index.childNodes[i].childNodes[ii].childNodes) {
                    console.log('iii',iii);
                    console.log('node',parsedd3index.childNodes[i].childNodes[ii].childNodes[iii]);
                    console.log('nodename',parsedd3index.childNodes[i].childNodes[ii].childNodes[iii].nodeName);
                    console.log('loc',parsedd3index.childNodes[i].childNodes[ii].childNodes[iii]['__location']);
                    var iiiloc = parsedd3index.childNodes[i].childNodes[ii].childNodes[iii]['__location'];
                    if (iiiloc) {
                        console.log('extracted',d3index.slice(iiiloc.startOffset,iiiloc.endOffset));
                    } else {
                        for (var iiii in parsedd3index.childNodes[i].childNodes[ii].childNodes[iii].childNodes) {
                            console.log('iiii',iiii);
                            console.log('node',parsedd3index.childNodes[i].childNodes[ii].childNodes[iii].childNodes[iiii]);
                            console.log('nodename',parsedd3index.childNodes[i].childNodes[ii].childNodes[iii].childNodes[iiii].nodeName);
                            console.log('loc',parsedd3index.childNodes[i].childNodes[ii].childNodes[iii].childNodes[iiii]['__location']);
                            var iiiiloc = parsedd3index.childNodes[i].childNodes[ii].childNodes[iii].childNodes[iiii]['__location'];
                            if (iiiiloc) {
                                console.log('extracted',d3index.slice(iiiiloc.startOffset,iiiiloc.endOffset));
                            }
                        }
                    }
                }
            }
        }
    }
    console.log('-------');
}

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
