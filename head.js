const assertEqual = require('./assertEqual');

const head = function(array) {
//return first element of array
  return array[0];
};

module.exports = head;


//others
// An array with only one element should still yield that one
// element as its head
// An empty array should yield undefined as its head