const assertEqual = function(actual, expected) {
  actual === expected ? console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`) : console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
};

const findKeyByValue = (categories, tvShow) => {
  let genre;
  //test,plan,part
  // loop through object
  // if matches tvShow, return key
  // if tvShow not found, return undef
  const catKeys = Object.keys(categories);
  for (let cat of catKeys) {
    if (categories[cat] === tvShow) {
      genre = cat;
    }

  }
  // for (let cat in categories) {
    
  // }

  return genre;
};
//test---------
const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);