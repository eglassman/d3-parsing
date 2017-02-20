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

const parse5 = require('parse5');
const fs = require('fs');
const options = { locationInfo: true };

var d3index = fs.readFileSync('../d3-example-viz/data/htmlfiles/index-239.html','utf8')
console.log(d3index)

var parsedd3index = parse5.parse(d3index,options);

console.log(d3index.slice(parsedd3index.childNodes[0]['__location'].startOffset,parsedd3index.childNodes[0]['__location'].endOffset))

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