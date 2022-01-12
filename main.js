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

gameBoard.addEventListener('click', placeItem)

//function to place tokens on grid
function placeItem(event) {
  event.target.innerHTML = `<img src='https://www.svgrepo.com/show/43115/burger.svg'>`
  // event.target.innerHTML = `<img src='https://www.svgrepo.com/show/14909/hot-dog.svg'>`

}
//function increase score

//establish what a win is

//when a game is over, clear the board with " "

//random function for who goes first?

//When all spaces are full but no winner, alert draw.
