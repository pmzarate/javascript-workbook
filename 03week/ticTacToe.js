'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

//board spaces
let board = [
  [' ', ' ', ' '],
  [' ', ' ', ' '],
  [' ', ' ', ' ']
];

//player's move
let playerTurn = 'X';

// location of spaces on board
function printBoard() {
  console.log('   0  1  2');
  console.log('0 ' + board[0].join(' | '));
  console.log('  ---------');
  console.log('1 ' + board[1].join(' | '));
  console.log('  ---------');
  console.log('2 ' + board[2].join(' | '));
}

// ways to win horizontally
function horizontalWin() {
  // Your code here
if ((board[0][0] === playerTurn && board[0][1]===playerTurn && board[0][2] === playerTurn)||
  (board[1][0]=== playerTurn && board[1][1]===playerTurn && board[1][2]===playerTurn) ||
  (board[2][0]===playerTurn && board[2][1] ===playerTurn&& board [2][2]===playerTurn)) {
      return true;}
        else {
          return false;}}
  
// ways to win vertically
function verticalWin() {
  // Your code here
if ((board[0][1] === playerTurn&& board[1][1]===playerTurn && board[2][1]===playerTurn) ||
  (board[0][0]===playerTurn && board[1][0]===playerTurn && board[2][0]===playerTurn) ||
  (board[0][2]===playerTurn && board[1][2]===playerTurn && board[2][2]== playerTurn)) {
      return true;}
      else {
        return false;}}

// ways to win diagonally
function diagonalWin() {
  // Your code here
  if ((board[0][0] ===playerTurn && board[1][1]===playerTurn && board[2][2]===playerTurn) ||
  (board[2][0]===playerTurn && board [1][1]===playerTurn && board [0][2]===playerTurn)) {
    return true;}
    else {
      return false;}}

// is space empty
function isEmpty (row, column) {
  if (board[row][column]== ""){
    return true;}
    else { return false;}}

// check for win either vert, hori, dia
function checkForWin() {
  // Your code here
  if (verticalWin() || horizontalWin() || diagonalWin()) {
    return true;}  
    else {
      return false;}
}

// changes players turn
function SwitchPlayer(playerTurn) {
  if(playerTurn === 'x') {
      return 'X';
  } else (playerTurn === 'o'); {
      return 'O';
  }

// if move is valid and space is empty => move piece to location.  then check to see if the move wins the game  
function ticTacToe(row, column) {
  // Your code here
  if (isValid(row, column)) {
    if (isEmpty(row,colum)) {
      movePiece(row, column);
      if (checkForWin()) {
        console.log("player "+ playerTurn + " wins");
      }
      else {
    }
  }   else { console.log ("choose another square");
}
}

// player's move
function movePiece(x, y) {
  board[x][y] = playerTurn;
}

//check to see if location is valid or available
function isValid(row, column) {
    if (
    (row == 0 || row == 1 || row == 2) &&
    (column == 0 || column == 1 || column == 2)) {
    return true;
    } else {
    return false;
  }
}

//prompt for turn
function getPrompt() {
  printBoard();
  console.log("It's Player " + playerTurn + "'s turn.");
  rl.question('row: ', (row) => {
    rl.question('column: ', (column) => {
      ticTacToe(row, column);
      getPrompt();
    });
  });
}

// Tests

if (typeof describe === 'function') {

  describe('#ticTacToe()', () => {
    it('should place mark on the board', () => {
      ticTacToe(1, 1);
      assert.deepEqual(board, [ [' ', ' ', ' '], [' ', 'X', ' '], [' ', ' ', ' '] ]);
    });
    it('should alternate between players', () => {
      ticTacToe(0, 0);
      assert.deepEqual(board, [ ['O', ' ', ' '], [' ', 'X', ' '], [' ', ' ', ' '] ]);
    });
    it('should check for vertical wins', () => {
      board = [ [' ', 'X', ' '], [' ', 'X', ' '], [' ', 'X', ' '] ];
      assert.equal(verticalWin(), true);
    });
    it('should check for horizontal wins', () => {
      board = [ ['X', 'X', 'X'], [' ', ' ', ' '], [' ', ' ', ' '] ];
      assert.equal(horizontalWin(), true);
    });
    it('should check for diagonal wins', () => {
      board = [ ['X', ' ', ' '], [' ', 'X', ' '], [' ', ' ', 'X'] ];
      assert.equal(diagonalWin(), true);
    });
    it('should detect a win', () => {
      assert.equal(checkForWin(), true);
    });
  });
} else {
  getPrompt()
}
