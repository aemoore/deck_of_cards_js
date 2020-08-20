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

class Deck {
    
    constructor() {
        var deck = [];
        face_values.forEach(face_value_element => {
            suit_values.forEach(suit_element => {
                var card = new Card(face_value_element, suit_element);
                deck.push(card)
            })
        });
        this.deck = deck;
    }
    
    /**
     * Shuffles array in place.
     * @param {Array} a items An array containing the items.
     */
    shuffle() {
        var j, x, i;
        for (i = this.deck.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            x = this.deck[i];
            this.deck[i] = this.deck[j];
            this.deck[j] = x;
        }
    }

    /**
     * Deals one card from deck.
     */
    dealOneCard() {
        if (this.deck.length == 0) {
            console.log("Entire deck has been dealt already");
        } else {
            var card = this.deck.pop();
            return card;
        }
    }
}

export default Deck;








