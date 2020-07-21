document.addEventListener('DOMContentLoaded', startGame)

// Define your `board` object here!
// Object made of arrays, 4x4 square grid
// surroundingMines: 
var board = {
  cells: [
    { row: 0, col: 0, isMine: true, hidden: true, isMarked: true },
    { row: 0, col: 1, isMine: false, hidden: true, surroundingMines: 2 },
    { row: 0, col: 2, isMine: true, hidden: true, isMarked: true },
    { row: 0, col: 3, isMine: true, hidden: true, isMarked: true },
    { row: 1, col: 0, isMine: false, hidden: true, surroundingMines: 2 },
    { row: 1, col: 1, isMine: false, hidden: true, surroundingMines: 1 },
    { row: 1, col: 2, isMine: false, hidden: true, surroundingMines: 3 },
    { row: 1, col: 3, isMine: false, hidden: true, surroundingMines: 3 },
    { row: 2, col: 0, isMine: false, hidden: true, surroundingMines: 2 },
    { row: 2, col: 1, isMine: true, hidden: true, isMarked: true },
    { row: 2, col: 2, isMine: false, hidden: true, surroundingMines: 1 },
    { row: 2, col: 3, isMine: false, hidden: true, surroundingMines: 0 },
    { row: 3, col: 0, isMine: true, hidden: true, isMarked: true },
    { row: 3, col: 1, isMine: false, hidden: true, surroundingMines: 2 },
    { row: 3, col: 2, isMine: false, hidden: true, surroundingMines: 1 },
    { row: 3, col: 3, isMine: false, hidden: true, surroundingMines: 0 }
  ]
};


function startGame() {
  // Don't remove this function call: it makes the game work!
  for (i = 0; i < board.cells.length; i++);

  lib.initBoard()
}


// Define this function to look for a win condition:
//
// 1. Are all of the cells that are NOT mines visible?
// 2. Are all of the mines marked? yeap
function checkForWin() {
  if
  // You can use this function call to declare a winner (once you've
  // detected that they've won, that is!)
  // lib.displayMessage('You win!')
}

// Define this function to count the number of mines around the cell
// (there could be as many as 8). You don't have to get the surrounding
// cells yourself! Just use `lib.getSurroundingCells`: 
//
//   var surrounding = lib.getSurroundingCells(cell.row, cell.col)
//
// It will return cell objects in an array. You should loop through 
// them, counting the number of times `cell.isMine` is true.
function countSurroundingMines(cell) {
  var surroundingMines = getSurroundingMines(row, col);
}

