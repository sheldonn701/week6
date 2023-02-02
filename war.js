class Card {
    constructor(suit, rank, value) { // will rank and value 1 through 13, suits 0 to 3
        this.suit = suit;
        this.rank = rank;
        this.value = value;
    }
}


class Deck {
    constructor() {
        this.cards = [];
    }
    //  need to create a deck of cards 
    makeDeck(){
        let suits = ["♠", "♣", "♥", "♦"];
        let ranks =  ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'];
        let values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

        // Add cards into this.cards via for loop
        // will run through a suit before moving on
        for (let i = 0; i < suits.length; i++) {
            // will run through each rank and value before going on
            for (let j = 0; j < ranks.length; j++) {
                this.cards.push(new Card(suits[i], ranks[j], values[j]));
            }
        }
    }

    shuffleDeck() {
        this.cards.sort(() => (Math.random() > 0.5) ? 1 : -1);
    }
}

class Player {
    constructor(name) {
        this.name = name;
        this.deck = [];
        this.points = 0;
    }
}

class Board {
    constructor() {
            this.cards = [];
            this.players = [];
            this.points = 0
            this.firstPlayer = new Player("First Player");
            this.players.push(this.firstPlayer);
            this.secondPlayer = new Player("Second Player");
//Rewards point to player
        } 
    getPoint (winner){
        if (winner == 1){
            this.firstPlayer.points += 1
        }
        else if (winner == 2){
            this.secondPlayer.points +=1
        }
         
        } 


    createDeck() {
    
        let suits = ["♠", "♣", "♥", "♦"];
        let ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace'];
        let values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
        
        // will run through a suit before moving on to the next
        for (let i = 0; i < suits.length; i++) {
            // will run through each rank and value before 
            for (let j = 0; j < ranks.length; j++) {
                this.cards.push(new Card(suits[i], ranks[j], values[j]));
            }
        }
    }
}


let board = new Board();

board.createDeck() 

var deck = board.cards
for (let i = 0; i < 52; i++) {
    let tempCard = deck[i];
    let randomIndex = Math.floor(Math.random() * 52);
    deck[i] = deck [randomIndex];
    deck[randomIndex] = tempCard;
}



  
for (let i = 0; i < 26; i++) { // adds deck to players hands
    board.firstPlayer.deck.push(deck.pop(i));
  
}

for (let i = 26; i < 52; i++) { // adds deck to players hands
 
    board.secondPlayer.deck.push(deck.pop()); 
}


   
//let i = 0;
let FirstDeck = board.firstPlayer.deck
let SecondDeck = board.secondPlayer.deck
for (i = 0; i < 26; i++){
    let round = i + 1
    console.log("Player 1: Card " + round+ " Value: " + FirstDeck[i].value);
    console.log("Player 2: Card " + round+ " Value: " + SecondDeck[i].value);
    if (FirstDeck[i].value >SecondDeck[i].value){ // comapres the card point Value
        alert("Player 1 Wins Round " + round);
        board.firstPlayer.points++
        console.log("Player 1 Points: " + board.firstPlayer.points);
    } else if (SecondDeck[i].value > FirstDeck[i].value){
        alert("Player 2 Wins Round " + round);
        board.secondPlayer.points++
        console.log("Player 2 Points: " + board.secondPlayer.points);
    } else {
        console.log("Tied, no points for Round "+ i);
    }
}




        
 
  //Displays the winner
let firstPlayer = board.firstPlayer;
let secondPlayer = board.secondPlayer;
if (firstPlayer.points > secondPlayer.points) {
    alert("First Player  is the Winner!!!!! with " + firstPlayer.points + " points");
}
else if(firstPlayer.points < secondPlayer.points) {
    alert("Second Player +  is the Winner!!!!! with " + secondPlayer.points);
}
else {("Players tied");
    alert(firstPlayer.player + " and " + secondPlayer.player + " Tied!!!!! with both players reciving " + firstPlayer.points);
}

    
     
 
 
 
 let war = new WarBoard(); // creates a board 
 war.beginWar(); // starts the War
        

