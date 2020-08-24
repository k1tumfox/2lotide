
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

module.exports = eqArrays;