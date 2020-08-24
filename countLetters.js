const assertEqual = function(actual, expected) {
  actual === expected ? console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`) : console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
};

// - takes in sentence
// - returns a count of each letter (thus an Object) in that sentence

const countLetters = (sentence) => {
  //plan, parts, test

  // create Object
  // loops through each character of string sentence
  // if exists append, if doesn't create key:value pair
  // return object

  const tracker = {};
  for (let char of sentence) {
    if (char !== ' ') {
      if (tracker[char]) {
        tracker[char]++;
      } else {
        tracker[char] = 1;
      }
    }
  }
  return tracker;

};

//test ------------------------
const result = countLetters("lighthouse in the house");
console.log(result);
assertEqual(result['h'], 4);
// should output
// {
//   l: 1,
//   i: 2,
//   g: 1,
//   h: 4,
//   t: 2,
//   o: 2,
//   u: 2,
//   s: 2,
//   e: 3,
//   n: 1,
// }