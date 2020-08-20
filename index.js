import { default as Card } from "./card.js";


const suits = {
    SPADE: 'spade',
    HEART: 'heart',
    CLUB: 'club',
    DIAMOND: 'diamond'
}

const values = {
    A: 'Ace',
    TWO: '2',
    THREE: '3',
    FOUR: '4',
    FIVE: '5',
    SIX: '6',
    SEVEN: '7',
    EIGHT: '8',
    NINE: '9',
    TEN: '10',
    JACK: 'Jack',
    QUEEN: 'Queen',
    KING: 'King'
}

var face_values = [values.A, values.TWO, values.THREE,
    values.FOUR, values.FIVE, values.SIX,values.SEVEN,
    values.EIGHT, values.NINE, values.TEN, values.JACK,
    values.QUEEN, values.KING];

var suit_values = [suits.SPADE, suits.HEART, suits.CLUB, suits.DIAMOND];

var deck = [];

/**
 * Shuffles array in place.
 * @param {Array} a items An array containing the items.
 */
function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}

// print cards
function createDeck() { 
    face_values.forEach(face_value_element => {
        suit_values.forEach(suit_element => {
            var card = new Card(face_value_element, suit_element);
            deck.push(card)
        })
    });

    shuffle(deck);
} 


function dealOneCard() {
    if (deck.length == 0) {
        console.log("Entire deck has been dealt already");
    } else {
        var card = deck.pop();
        console.log(card);
        console.log(deck.length);
    }
}

createDeck();
dealOneCard();