'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


class Checker {
  // Your code here
  constructor(color) { 
    if (color==='red'){
      this.color = color;
      this.symbol = '❤';
    } else 
    if(color==='black') {
      this.color = color;
      this.symbol = '✠';
    }
  }
}

const redChecker = new Checker('red');
const blackChecker = new Checker('black');
let playerTurn = blackChecker;


const switchPlayer= () => {
  if (playerTurn == blackChecker) {
    playerTurn = redChecker;
  } else {
    playerTurn = blackChecker;
  }
}


class Board {
  constructor() { 
    this.grid = [];
    this.checkers = [];
    //this.selectChecker = selectChecker([row],[column]);
}
  // method that creates an 8x8 array, filled with null values
  createGrid() {
    // loop to create the 8 rows
    for (let row = 0; row < 8; row++) {
      this.grid[row] = [];
      // push in 8 columns of nulls
      for (let column = 0; column < 8; column++) {
        this.grid[row].push(null);
      }
    }
  }
  viewGrid() 
  {
    // add our column numbers
    let string = "  0 1 2 3 4 5 6 7\n";
    for (let row = 0; row < 8; row++) {
      // we start with our row number in our array
      const rowOfCheckers = [row];
      // a loop within a loop
      for (let column = 0; column < 8; column++) {
        // if the location is "truthy" (contains a checker piece, in this case)
        if (this.grid[row][column]) {
          // push the symbol of the check in that location into the array
          //rowOfCheckers.push(this.grid[row][column].symbol);
          rowOfCheckers.push(this.grid[row][column].symbol)
        } else {
          // just push in a blank space
          rowOfCheckers.push(' ');
        }
      }
      // join the rowOfCheckers array to a string, separated by a space
      string += rowOfCheckers.join(' ');
      // add a 'new line'
      string += "\n";
    }
    console.log(string);
  }
  initializeGrid(){
    for (let row1 = 0; row1 < 3; row1++){
      for(let col1 = 0; col1 < 8; col1++) {
        if (col1 %2 === 1 && row1 %2 === 0) {
            this.grid [row1][col1] = redChecker;
            this.checkers.push(redChecker)
            }   
              else if (col1 %2 === 0 && row1 %2 === 1) {
              this.grid [row1][col1] = redChecker;
              this.checkers.push(redChecker);
            }
          }
        }
      for (let row0 = 5; row0 < 8; row0++){
          for(let col0 = 0; col0 < 8; col0++) {
            if (col0 %2 === 1 && row0 %2 === 0) {
                this.grid [row0][col0] = blackChecker;
                this.checkers.push(blackChecker)
                }   
                  else if (col0 %2 === 0 && row0 %2 === 1) {
                  this.grid [row0][col0] = blackChecker;
                  this.checkers.push(blackChecker);
          // Your code here
                  }
            }  
        }
    } 
  movedChecker(whichPiece, toWhere) {
      let start = whichPiece.split('');
      let end = toWhere.split('');
      let startX = start[0];
      let startY = start[1];
      let endX = end[0];
      let endY = end[1];
  
      const is0to7 = () => {
        if (((startX || endX || startY || endY) <=7) && ((startX || endX || startY || endY) >= 0)) {
          return true;
        };
      }
      const isInputOdd = () => {
        if ((startX + startY) && (endX + endY) %2 !== 0) {
          return true;
        };
      }
      const isEmpty = () => {
        if (this.board.grid[endX][endY] === null) {
          return true;
        };
      }
      return is0to7 && isInputOdd(whichPiece) && isInputOdd(toWhere) && isEmpty(whichPiece) && !isEmpty(toWhere);
    }

  }
  //;
  // killChecker() {

  // };




class Game {
  constructor() {
    this.board = new Board;}
  start() {
    this.board.createGrid()
    this.board.initializeGrid();   
  }
}  



function getPrompt() {
  game.board.viewGrid();
  rl.question('which piece?: ', (whichPiece) => {
    rl.question('to where?: ', (toWhere) => {
      let start = whichPiece.split('');
let end = toWhere.split('');  
let startX = start[0];
let startY = start[1];
let endX = end[0];
let endY = end[1];

      game.moveChecker(startX, endX, startY, endY);
      getPrompt();
    });
  });
}



const game = new Game();
game.start();



// Tests
if (typeof describe === 'function') {
  describe('Game', () => {
    it('should have a board', () => {
      assert.equal(game.board.constructor.name, 'Board');
    });
    it('board should have 24 checkers', () => {
      assert.equal(game.board.checkers.length, 24);
    });
  });

  describe('Game.moveChecker()', () => {
    it('should move a checker', () => {
      assert(!game.board.grid[4][1]);
      game.moveChecker('50', '41');
      assert(game.board.grid[4][1]);
      game.moveChecker('21', '30');
      assert(game.board.grid[3][0]);
      game.moveChecker('52', '43');
      assert(game.board.grid[4][3]);
    });
    it('should be able to jump over and kill another checker', () => {
      game.moveChecker('30', '52');
      assert(game.board.grid[5][2]);
      assert(!game.board.grid[4][1]);
      assert.equal(game.board.checkers.length, 23);
    });
  });
} else {
  getPrompt();
}
