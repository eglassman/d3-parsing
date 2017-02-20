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

var htmlparser = require("htmlparser2");
var parser = new htmlparser.Parser({
    onopentag: function(name, attribs){
        if(name === "script" && attribs.type === "text/javascript"){
            console.log("JS! Hooray!");
        }
    },
    ontext: function(text){
        console.log("-->", text);
    },
    onclosetag: function(tagname){
        if(tagname === "script"){
            console.log("That's it?!");
        }
    }
}, {decodeEntities: true});
parser.write("Xyz <script type='text/javascript'>var foo = '<<bar>>';</ script>");
parser.end();