const readlineSync = require("readline-sync");

let p1 = readlineSync.question('PLAYER 1: What is your selection? ');
console.log('Player 1 selected: ' + p1 + '!');

let p2 = readlineSync.question('PLAYER 2: What is your selection? ');
console.log('Player 2 selected: ' + p2 + '!');

let winner = compare(p1, p2);

if (winner === "player1") {
  console.log(`Winner is Player 1!!!`);
} else if (winner === "player2") {
  console.log(`Winner is Player 2!!!`);
} else if (winner === "draw") {
  console.log(`Draw!  Play again...`);
}
// console.log(`winner is ${winner}`);

function compare(a, b) {
  if(a === "rock") {
    if (b === "rock") {
      return "draw"
    } else if (b === "paper") {
      return "player2"
    } else if (b === "scissors") {
      return "player1"
    }
  } else if( a === "paper") {
    if (b === 'rock') {
      return 'player1';
    } else if (b === 'paper') {
      return 'draw';
    } else if (b === 'scissors') {
      return 'player2';
    }

  } else if(a === "scissors") {
    if (b === 'rock') {
      return 'player2';
    } else if (b === 'paper') {
      return 'player1';
    } else if (b === 'scissors') {
      return 'draw';
    }
  }
}