//const SUITS =[ "♠", "♣", "♥", "♦"]

//const VALUES = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  //]


 class Card {
    constructor(value, suit){
        this.value = value;
        this.suit = suit;
    
    }
 }
class Deck {
    constructor(cards = freshDeck()){
        this.cards = cards; }


    }




 var deck = []
 
 for( var i = 0; i < 13; i++){
    var v = i+2;
    if (v == 11){
        v ="J"
    }
    if (v == 12){
        v ="Q"
    } if (v == 13){
        v ="K"
    } if (v == 14){
        v ="A"
    }
    var n = new Card(v,"Clubs");
    deck.push(n)
 }

 for( var i = 0; i < 13; i++){
    var v = i+2;
    if (v == 11){
        v ="J"
    }
    if (v == 12){
        v ="Q"
    } if (v == 13){
        v ="K"
    } if (v == 14){
        v ="A"
    }
    var n = new Card(v,"Spades");
    deck.push(n)
}

for( var i = 0; i < 13; i++){
    var v = i+2;
    if (v == 11){
        v ="J"
    }
    if (v == 12){
        v ="Q"
    } if (v == 13){
        v ="K"
    } if (v == 14){
        v ="A"
    }
    var n = new Card(v,"Hearts");
    deck.push(n)
}

for( var i = 0; i < 13; i++){
    var v = i+2;
    if (v == 11){
        v ="J"
    }
    if (v == 12){
        v ="Q"
    } if (v == 13){
        v ="K"
    } if (v == 14){
        v ="A"
    }
    var n = new Card(v,"Diamonds");
    deck.push(n)
}

console.log(deck)

class Player {
    constructor(name,num){
        this.name = name;
        this.number = num;
        this.pointsWon = 0;
        this.deck = [];
    }
}

class Game{
    constructor() {
        this.handsLeft = 26;
        this.player1 = new Player("Player One",1);
        this.player2 = new Player("Player Two",2);
        this.winningPlayer = 0;
    }
}


 start();{
    let deck = new Deck(); // code starts to not work here dont know why 
   deck.shuffle();
    let playerHands = deck.deal();
    this.player1.deck = playerHands[0];
    this.player2.deck = playerHands[1];
 
    return this.play();
}

 play();{
    let winner;
   for(let i =0;i< 26;i++){
        console.log(this.handsLeft, 'hands remaining')
  this.handsLeft--;
       console.log(` Player One: ${this.player1.deck[i].name} vs Player Two`)
       switch(true){
            case (this.player1.deck[i].value > this.player2.deck[i].value):
                this.player1.pointsWon++;
                console.log('Player one wins the round')
            
                case ( this.player1.decl[i].value < this.player2.deck[i].value):
                    this.player2.pointsWon++;
                    console.log('Player 2 wins the round')
                    break;
                    default:
                        console.log('Tie: No points awarded');
        }
    }
 
console.log(`Player One: ${this.player1.pointsWon}, Player Two: ${this.player2.pointsWon}`);
 }

switch(true){
    case (this.player1.pointsWon > this.player2.pointsWon):
        winner = this.player1;
      this.winningPlayer = 1;
        break;

        case (this.player1.pointsWon < this.player2.pointsWon):
          winner = this.player2;
        this.winningPlayer = 2;
        break;

            default:
  console.log('Tie')

}


             
        