import { default as Deck } from "./deck.js";

var cards = new Deck();

console.log(cards.deck);
cards.shuffle();
console.log(cards.deck.length);
console.log(cards.deck);
var card = cards.dealOneCard();
console.log(card);