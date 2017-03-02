const {JSHINT} = require('jshint');

var source = [
  'function goo() {}',
  'foo = 3;'
];
var options = {
  undef: true
};
var predef = {
  foo: false
};

JSHINT(source, options, predef);

console.log(JSHINT.data());