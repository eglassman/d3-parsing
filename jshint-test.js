const {JSHINT} = require('jshint');

var source = [
  'var canvas = document.querySelector("canvas")',
  'context = canvas.getContext("2d");'
];
var options = {
  undef: true,
  unused: true,
  browser: true, //node: true,
  asi: true
};
var predef = {
  context: true
};
// var predef = {};

JSHINT(source, options, predef);

console.log(JSHINT.data());

console.log(JSHINT.data()['implieds'])