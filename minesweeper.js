document.addEventListener('DOMContentLoaded', startGame)

// Define your `board` object here!
// Object made of arrays, 4x4 square grid
// surroundingMines: 
var board = {
  cells: [
    { row: 0, col: 0, isMine: true, hidden: true },
    { row: 0, col: 1, isMine: false, hidden: true },
    { row: 0, col: 2, isMine: true, hidden: true },
    { row: 0, col: 3, isMine: true, hidden: true },
    { row: 1, col: 0, isMine: false, hidden: true },
    { row: 1, col: 1, isMine: false, hidden: true },
    { row: 1, col: 2, isMine: false, hidden: true },
    { row: 1, col: 3, isMine: false, hidden: true },
    { row: 2, col: 0, isMine: false, hidden: true },
    { row: 2, col: 1, isMine: true, hidden: true },
    { row: 2, col: 2, isMine: false, hidden: true },
    { row: 2, col: 3, isMine: false, hidden: true },
    { row: 3, col: 0, isMine: true, hidden: true },
    { row: 3, col: 1, isMine: false, hidden: true },
    { row: 3, col: 2, isMine: false, hidden: true },
    { row: 3, col: 3, isMine: false, hidden: true }
  ]
};


function startGame() {
  document.addEventListener("click", checkForWin)
  document.addEventListener("contextmenu", checkForWin)
  // Don't remove this function call: it makes the game work!
  for (let i = 0; i < board.cells.length; i++) {
    board.cells[i].surroundingMines = countSurroundingMines(board.cells[i])
  }
  console.log(board)
  lib.initBoard()
}


// Define this function to look for a win condition:
//
// 1. Are all of the cells that are NOT mines visible?
// 2. Are all of the mines marked? 
function checkForWin() {
  for (let i = 0; i < board.cells; i++)
    if (isMine && isMarked == true) {
    }
  if (isMine && hidden == false) {
  }
  return lib.displayMessage('You win!')
}
// make multiple if statements, don't try over complicate it


// is it a mine
// is it hidden
// is it marked
// is it 


// You can use this function call to declare a winner (once you've
// detected that they've won, that is!)
// lib.displayMessage('You win!')


// Define this function to count the number of mines around the cell
// (there could be as many as 8). You don't have to get the surrounding
// cells yourself! Just use `lib.getSurroundingCells`: 
//
//   var surrounding = lib.getSurroundingCells(cell.row, cell.col)
//
// It will return cell objects in an array. You should loop through 
// them, counting the number of times `cell.isMine` is true.


function countSurroundingMines(cell) {
  var surrounding = lib.getSurroundingCells(cell.row, cell.col)
  var count = 0;

  for (let i = 0; i < surrounding.length; i++)
    if (surrounding[i]['isMine'] == true) {
      count++
    }
  return count
};
  // create for loop that loops through the surrounding cells
  // make it count surroundingCells.length
  // include an if statement (if the surroundingMine is true)
  // add a number to the count
  // return the count



