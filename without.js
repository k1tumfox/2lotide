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

// - returns a subset of a given Array (new array), removing unwanted ele
const without = (source, removeItems) => {
  // loop through remoteItems, compare to source
  // if not match, push into new Array

  const newArr = [];
  for (let ele of source) {
    let toPush = true;
    for (let item of removeItems) {
      if (ele === item) {
        toPush = false;
        break;
      }
    }
    if (toPush) {
      newArr.push(ele);
    }
  }

  return newArr;
};

// assertArraysEqual(without([1, 2, 3], [1]), [2, 3]); // => [2, 3]
// assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]); // => ["1", "2"]

//test other cases

// passed below test to ensure source is untouched-----------
// const words = ["hello", "world", "lighthouse"];
// without(words, ["lighthouse"]); // no need to capture return value for this test case
// // Make sure the original array was not altered by the without function
// assertArraysEqual(words, ["hello", "world", "lighthouse"]);