import { default as Deck } from "./deck.js";

var cards = new Deck();

console.log("Example run of Deck of Cards.\nNew deck created:");
console.log(cards.deck);
console.log("shuffling deck...");
cards.shuffle();
console.log("done. Shuffled deck is:");
console.log(cards.deck);
console.log("dealing one card...");
var card = cards.dealOneCard();
console.log("card dealt:");
console.log(card);