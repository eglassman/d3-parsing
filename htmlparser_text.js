// var htmlparser = require("htmlparser"), sys = require("util");

// var rawHtml = "Xyz <script language= javascript>var foo = '<<bar>>';< /  script><!--<!-- Waah! -- -->";
// var handler = new htmlparser.DefaultHandler(function (error, dom) {
//     if (error)
//         console.log('oops',error)
//     else
//         console.log('hooray!')
// });
// var parser = new htmlparser.Parser(handler);
// parser.parseComplete(rawHtml);
// console.log(sys.inspect(handler.dom, false, null));

// var htmlparser = require("htmlparser2");
// var parser = new htmlparser.Parser({
//     onopentag: function(name, attribs){
//         if(name === "script" && attribs.type === "text/javascript"){
//             console.log("JS! Hooray!");
//         }
//     },
//     ontext: function(text){
//         console.log("-->", text);
//     },
//     onclosetag: function(tagname){
//         if(tagname === "script"){
//             console.log("That's it?!");
//         }
//     }
// }, {decodeEntities: true});
// parser.write("Xyz <script type='text/javascript'>var foo = '<<bar>>';</ script>");
// parser.end();

const fs = require('fs');
const parse5 = require('parse5');
const utils = require('parse5-utils');
const options = { locationInfo: true };

var d3index = fs.readFileSync('../d3-example-viz/data/htmlfiles/index-239.html','utf8')
console.log(d3index)

var parsedd3index = parse5.parse(d3index,options);
console.log(utils.flatten(parsedd3index))


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

//console.log(d3index.slice(parsedd3index.childNodes[0]['__location'].startOffset,parsedd3index.childNodes[0]['__location'].endOffset))

// fs.readFile('../d3-example-viz/data/htmlfiles/index-239.html', 'utf8', function (err,data) {
//   if (err) {
//     return console.log(err);
//   }
//   console.log(data);
//   var document = parse5.parse(data);
//   console.log(document);
// });


//const document = parse5.parse('<!DOCTYPE html><html><head></head><body>Hi there!</body></html>');

//console.log(document)//.childNodes[1].tagName); //> 'html'