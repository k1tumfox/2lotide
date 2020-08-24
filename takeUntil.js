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

const takeUntil = function(array, callback) {
  // test/plan/part
  let result = [];
  for (let item of array) {
    //gatewy
    if (!callback(item)) {
      result.push(item);
    } else {
      break;
    }

  }
  return result;
  // 'slice of array with ele taken from the beginning';
  //should keep going until callback/predicate returns truthy
};

//tests-------------------------------------
// const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
// const results1 = takeUntil(data1, x => x < 0);
// // console.log(results1);
// assertArraysEqual(results1, [ 1, 2, 5, 7, 2 ]);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
// console.log(results2);
assertArraysEqual(results2, [ 'I\'ve', 'been', 'to', 'Hollywood' ]);

//expected output----------
// [ 1, 2, 5, 7, 2 ]
// ---
// [ 'I\'ve', 'been', 'to', 'Hollywood' ]