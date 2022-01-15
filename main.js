var gameBoard = document.querySelector('.game-board')
// var squareZero = document.querySelector('#s0')
// var squareOne = document.querySelector('#s1')
// var squareTwo = document.querySelector('#s2')
// var squareThree = document.querySelector('#s3')
// var squareFour = document.querySelector('#s4')
// var squareFive = document.querySelector('#s5')
// var squareSix = document.querySelector('#s6')
// var squareSeven = document.querySelector('#s7')
// var squareEight = document.querySelector('#s8')
var counterOne = document.querySelector('#counterOne')
var counterTwo = document.querySelector('#counterTwo')
var playerTurn = document.querySelector('.player-turn')
var playerOne = new Player('Hamburger', burger)
var playerTwo = new Player('Hotdog', hotdog)
var burger = `<img src='https://www.svgrepo.com/show/43115/burger.svg'>`
var hotdog = `<img src='https://www.svgrepo.com/show/14909/hot-dog.svg'>`
var board = ["","","","","","","","",""]

var possibleWins = [ [0,1,2], [3,4,5], [6,7,8], [0,3,6],
  [1,4,7], [2,5,8], [0,4,8], [2,4,6] ]

gameBoard.addEventListener('click', validateMove)

function determineWinner() {
  if (!board.includes("")) {
    playerTurn.innerText = `It's A Tie! Try Again!`
  }
  for (var i = 0; i < possibleWins.length; i++) {
    var winCondition = possibleWins[i]
    var a = board[winCondition[0]]
    var b = board[winCondition[1]]
    var c = board[winCondition[2]]
    if (a === "" || b === "" || c === "") {
      continue
    }
    if (a === b && b === c) {
      console.log()
      game.roundWon = true;
      declareWinner()
    }
  }
}
function updateScore() {
  counterOne.innerText = player1.wins
  counterTwo.innerText = player2.wins
}

function declareWinner() {
  if (game.currentPlayer === 0) {
    playerTurn.innerText = `Hamburger Wins!! Relish This Moment!`
    player1.wins += 1

  }
  if (game.currentPlayer === 1){
    playerTurn.innerText = `Congrats, Hotdog, You're a Weiner!!`
    player2.wins += 1
  }
}

var player1 = new Player('Hamburger', burger)
var player2 = new Player('Hotdog', hotdog)
var game = new Game(player1, player2)

function alternatePlayers() {
  if (game.currentPlayer == 1) {
    game.currentPlayer = 0
    playerTurn.innerText = `Hotdog, its your turn!`
    placeItem('hamburger')
  } else {
    game.currentPlayer = 1
    playerTurn.innerText = `Hamburger, its your turn!`
    placeItem('hotdog')
  }
}

function placeItem(item) {
  var i = event.target.id.slice(1)
  event.target.classList.add(item, 'selected')
  board.splice(i, 1, item)
  determineWinner()
}

function validateMove() {
  determineWinner()
  updateScore()
  if (!event.target.classList.contains('selected')) {
  alternatePlayers()
  } else {
  window.alert('Keep Yer Danged Snacks Away From My Danged Snacks!!!')
  }
}



//when a game is over, clear the board with " "

//reset board function
