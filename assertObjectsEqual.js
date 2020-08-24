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

const assertObjectsEqual = (actual, expected) => {
  //test,plan,part
  const inspect = require('util').inspect;
  eqObjects(actual, expected) ? console.log(`✅✅✅ ${inspect(actual)} === ${inspect(expected)}`) : console.log(`🛑🛑🛑 ${inspect(actual)} !== ${inspect(expected)}`);
};

//test--------------------------------
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
// --eqObjects(cd, dc); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
// --eqObjects(cd, cd2); // => false

assertObjectsEqual(cd, dc);