//npm module dependences
const fs = require('fs');
const esprima = require('esprima');
const traverse = require("ast-traverse");
const htmlparser = require("htmlparser");
const sys = require("util");
const utils = require('parse5-utils');
const parse5 = require('parse5');
const options = { locationInfo: true };


parseAndPrint('../d3-example-viz/data/htmlfiles/index-239.html')
parseAndPrint('../d3-example-viz/data/htmlfiles/index-302.html')
parseAndPrint('../d3-example-viz/data/htmlfiles/index-304.html')
parseAndPrint('../d3-example-viz/data/htmlfiles/index-458.html')
parseAndPrint('../d3-example-viz/data/htmlfiles/index-8f1.html')
parseAndPrint('../d3-example-viz/data/htmlfiles/index-9d5.html')
parseAndPrint('../d3-example-viz/data/htmlfiles/index-d28.html')


function parseAndPrint(filePathAndName) {
  //read in file of interest
  var d3index = fs.readFileSync(filePathAndName,'utf8')
  //var d3index = fs.readFileSync('test-index.html','utf8');

  //console.log(d3index)

  //parse the html
  var parsedd3index = parse5.parse(d3index,options);

  var parsedd3index_flattened = utils.flatten(parsedd3index);

  for (var i in parsedd3index_flattened) {
    //console.log('-------');
    //console.log(parsedd3index_flattened[i].nodeName);
    // console.log(parsedd3index_flattened[i]['__location']); //.startOffset,parsedd3index_flattened[i].nodeName['__location'].endOffset));
    var loc = parsedd3index_flattened[i]['__location'];
    // if (loc) {
    //   console.log(d3index.slice(loc.startOffset,loc.endOffset));
    // }
    if (parsedd3index_flattened[i].nodeName==='script') {
      if (loc.startTag.endOffset === loc.endTag.startOffset){
          //then this script tag has no textcontents; print the whole thing
          //console.log('no contents',d3index.slice(loc.startOffset,loc.endOffset));
      } else {
          var scriptContents = d3index.slice(loc.startTag.endOffset,loc.endTag.startOffset);
          console.log('scriptContents',scriptContents);
      }
      
    }
    //console.log('-------');
  }

  var d3codeAsString = scriptContents;// 'var arc = d3.arc().outerRadius(radius - 10).innerRadius(radius - 70).context(context); var labelArc = d3.arc().outerRadius(radius - 40).innerRadius(radius - 40).context(context);';

  var parsedd3 = esprima.parse(d3codeAsString, { range: true, loc: true });

  //console.log('traversing parsedd3')

  traverse(parsedd3, {pre: function(node, parent, prop, idx) {
      //console.log(node.type + (parent ? " from parent " + parent.type + " via " + prop + (idx !== undefined ? "[" + idx + "]" : "") : ""));
      if (node.type == "CallExpression"){
          console.log('- - - -');
          //console.log('check me out!');
          //console.log(node.range);

          var node_str = d3codeAsString.slice(node.range[0],node.range[1]);
          console.log(node_str)
          try {
            var function_name = node.callee.property.name
            console.log(function_name)
            fs.appendFile('function_calls/'+function_name+".txt", "#"+ filePathAndName + '\n' + node_str + '\n\n', function (err) {
              if (err) {
                // append failed
              } else {
                // done
              }
            })
          } catch(err){
            console.log(err)
            fs.appendFile('function_calls/no_function_name.txt', "#"+ filePathAndName + '\n' + node_str + '\n\n', function (err) {
              if (err) {
                // append failed
              } else {
                // done
              }
            })
          }
          
      }    
  }});
}

