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

// returns new array based on results of callback
const map = (array, callback) => {
  //test,plan,part
  const results = [];

  for (let item of array) {
    results.push(callback(item));
  }

  return results;
};

const words = ["ground", "control", "to", "major", "tom"];

// const results1 = map(words, word => word[0]);
const results2 = map(words, word => word += 'MEW');
const results3 = map(words, word => word.length);

assertArraysEqual(results2, ["groundMEW", "controlMEW", "toMEW", "majorMEW", "tomMEW"]);
assertArraysEqual(results3, [6, 7, 2, 5, 3]);
