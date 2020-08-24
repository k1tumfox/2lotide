const assertEqual = function(actual, expected) {
  actual === expected ? console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`) : console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
};

const eqArrays = (a1, a2) => {
  
  //handle arraylengths
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

// take in 2 obj, returns true if they match keys: values
// must have same number of keys
// value for each key in obj, is the same for the same key in other obj
const eqObjects = function(object1, object2) {
  //test,plan,part
  const cKeys = Object.keys(object1);
  const cKeys2 = Object.keys(object2);

  if (cKeys.length === cKeys2.length) {
    for (let ele of cKeys) {
      
      if (Array.isArray(object1[ele]) && Array.isArray(object2[ele])) {
        if (!eqArrays(object1[ele], object2[ele])) {
          return false;
        }
      } else if (object1[ele] !== object2[ele]) {
        return false;
      } else {
        continue;
      }
    }
    return true;

  } else {
    return false; //or print statement
  }

};

//test--------------------------------
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
// --eqObjects(cd, dc); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
// --eqObjects(cd, cd2); // => false

assertEqual(eqObjects(cd, cd2), false);

//passed assertions-------------
// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// --eqObjects(ab, ba); // => true
// --eqObjects(ab, abc); // => false
// const abc = { a: "1", b: "2", c: "3" };
// assertEqual(eqObjects(ab, abc), false);