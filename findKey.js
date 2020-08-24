const assertEqual = function(actual, expected) {
  actual === expected ? console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`) : console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
};

const findKey = (object, callback) => {
  //test,plan,part
  // iterate object
  // return first key which callback returns truthy
  // if no key found, return undefined
  
  // let answerKey;
  const theKeys = Object.keys(object);
  for (key of theKeys) {   
    if (callback(object[key])) {//not string, must access value of key
      return key;
    }
  }
  return;
};

//tst-------------------------------
const twoStarred = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2); // => "noma"

assertEqual(twoStarred, 'noma');