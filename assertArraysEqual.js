const eqArrays = require('./eqArrays');

const assertArraysEqual = (a1, a2) => {
  eqArrays(a1, a2) ? console.log(`✅✅✅ ${a1} === ${a2}`) : console.log(`🛑🛑🛑 ${a1} !== ${a2}`);
};

module.exports = assertArraysEqual;
// assertArraysEqual(["1", "2", "3"], ["1", "2", '3']);