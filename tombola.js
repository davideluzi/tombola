let Card = require("./card.js");
let Counter = require("./counter.js");

// Init user card
let UserCard = new Card();
// Init computer card
let ComputerCard = new Card();
// Init counter
let Counter = new Counter();

console.log('BENVENUTI NEL GIOCO DELLA TOMBOLA!\n')
console.log('----------------------------------\n')
console.log('Questa è la tua cartella:\n');
console.log(UserCard.rows);

// 