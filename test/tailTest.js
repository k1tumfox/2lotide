const assertEqual = require('../assertEqual');
const tail = require('../tail');

//tests
let ace = ["Hello", "Lighthouse", "Labs"];
const result = tail(ace);
assertEqual(result[0], "Lighthouse");
assertEqual(result[1], "Labs");
console.log(ace);

//edgecase1, 1 element array should return empty
let spade = [6];
const result1 = tail(spade);
assertEqual(result1[0], undefined);

//edgecase2, emtpy array should return empty
let club = [];
const result2 = tail(club);
assertEqual(result2[0], undefined);
