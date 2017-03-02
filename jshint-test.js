const {JSHINT} = require('jshint');

var source = [
  'function goo() {}',
  'foo = 3;'
];
var options = {
  undef: true,
  unused: true,
  node: true
};
// var predef = {
//   foo: false
// };
var predef = {};

JSHINT(source, options, predef);

console.log(JSHINT.data());