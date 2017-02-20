var htmlparser = require("htmlparser"), sys = require("util");

var rawHtml = "Xyz <script language= javascript>var foo = '<<bar>>';< /  script><!--<!-- Waah! -- -->";
var handler = new htmlparser.DefaultHandler(function (error, dom) {
    if (error)
        console.log('oops',error)
    else
        console.log('hooray!')
});
var parser = new htmlparser.Parser(handler);
parser.parseComplete(rawHtml);
console.log(sys.inspect(handler.dom, false, null));