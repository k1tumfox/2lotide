const assertEqual = function(actual, expected) {
  actual === expected ? console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`) : console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
};

module.exports = assertEqual;
//prev iteration
// if (actual === expected) {
//   console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
//   // return true;
// } else {
//   console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
//   // return false;
// }



