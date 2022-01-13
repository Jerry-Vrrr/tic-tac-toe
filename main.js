
var gameBoard = document.querySelector('.game-board')
var squareOne = document.querySelector('#square-one')
var squareTwo = document.querySelector('#square-two')
var squareThree = document.querySelector('#square-three')
var squareFour = document.querySelector('#square-four')
var squareFive = document.querySelector('#square-five')
var squareSix = document.querySelector('#square-six')
var squareSeven = document.querySelector('#square-seven')
var squareEight = document.querySelector('#square-eight')
var squareNine = document.querySelector('#square-nine')

var counterOne = document.querySelector('#counterOne')
var counterTwo = document.querySelector('#counterTwo')
var playerTurn = document.querySelector('.playerTurn')

var playerOne = new Player('Hamburger', burger)
var playerTwo = new Player('Hotdog', hotdog)
var burger = `<img src='https://www.svgrepo.com/show/43115/burger.svg'>`
var hotdog = `<img src='https://www.svgrepo.com/show/14909/hot-dog.svg'>`

var board = [
  squareOne,squareTwo,squareThree,squareFour,squareFive,
  squareSix,squareSeven,squareEight,squareNine]

var possibleWins = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6]
  ]
gameBoard.addEventListener('click', alternatePlayers)


function doStuff() {

}
// function to alternate players
var player1 = new Player('Hamburger',burger)
var player2 = new Player('Hotdog',hotdog)
var game = new Game()
function alternatePlayers() {

  console.log(game.currentPlayer)

  if (game.currentPlayer == 1) {
    game.currentPlayer = 0
    console.log(game.currentPlayer)
      placeItem('hamburger')

  } else {
    game.currentPlayer = 1
    console.log(game.currentPlayer)
    placeItem('hotdog')

  }
}

// function switchPlayer() {
//     if (player === 'Hotdog')
//         player = 'Hamburger';
//     else if (player ==='Hamburger')
//         player = 'Hotdog';
// }

function placeItem(item) {
  console.log(event.target)
 event.target.classList.add(item, 'selected')

}
//function increase score

//establish what a win is

//when a game is over, clear the board with " "

//random function for who goes first?

//When all spaces are full but no winner, alert draw.

//reset board function
