const eqArrays = (a1, a2) => {
  if (a1.length !== a2.length) {
    console.log("Arrays being compared must be of same length.");
    return;
  }
  for (let i = 0; i < a1.length; i++) {
    if (a1[i] !== a2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = (a1, a2) => {
  eqArrays(a1, a2) ? console.log(`✅✅✅ ${a1} === ${a2}`) : console.log(`🛑🛑🛑 ${a1} !== ${a2}`);
};


const letterPositions = function(sentence) {
  // test, plan, part
  
  // loop through string (for of), avoid spaces with if gateway
  // if exist in obj, append
  // if dne in obj, create key:value pair
  //    store index
  // return object containing letters as keys and indices as array values
  const results = {};
  
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] !== ' ') {
      if (results[sentence[i]]) {
        results[sentence[i]].push(i);
      } else {
        results[sentence[i]] = [i];

      }
    }
  }

  return results;
};

const testCase = 'lighthouse in the house';
const x = letterPositions(testCase);
const y = x.h;
assertArraysEqual(y, [3, 5, 15, 18]);
console.log(x);

// {
//   l: [0],
//   i: [1, 11],
//   g: [2],
//   h: [3, 5, 15, 18],
//   t: [4, 14],
//   o: [6, 19],
//   u: [7, 20],
//   s: [8, 21],
//   e: [9, 16, 22],
//   n: [12]
// }
