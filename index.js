import { default as Deck } from "./deck.js";

var cards = new Deck();

cards.dealOneCard();
console.log(cards.deck.length);
var card = cards.dealOneCard();
console.log(card);