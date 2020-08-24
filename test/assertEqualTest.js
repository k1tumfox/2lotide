const assertEqual = require('../assertEqual');

//TEST
console.log(assertEqual("Lighthouse Labs", "Bootcamp"));
console.log(assertEqual(1, 1));
console.log(assertEqual('🦜', 'wales'));
console.log(assertEqual('🦜', '🦜'));
console.log(assertEqual('🐔', '🦆'));
console.log(assertEqual(11, 6));