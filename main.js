/*~~~~~~~~~~~~QUERY SELECTORS~~~~~~~~~~~~*/
var gameBoard = document.querySelector('.game-board')
var counterOne = document.querySelector('#counterOne')
var counterTwo = document.querySelector('#counterTwo')
var playerTurn = document.querySelector('.player-turn')
var newGameButton = document.querySelector('.start-new-game')
/*~~~~~~~~~~~~GAMEPLAY VARIABLES~~~~~~~~~~~~*/
var burger = `<img src='https://www.svgrepo.com/show/43115/burger.svg'>`
var hotdog = `<img src='https://www.svgrepo.com/show/14909/hot-dog.svg'>`
var player1 = new Player('Hamburger', burger)
var player2 = new Player('Hotdog', hotdog)
var game = new Game(player1, player2)
/*~~~~~~~~~~~~BOARD AND SCORING ARRAUS~~~~~~~~~~~~*/
var board = ["", "", "", "", "", "", "", "", ""]
var possibleWins = [ [0,1,2], [3,4,5], [6,7,8], [0,3,6],
  [1,4,7], [2,5,8], [0,4,8], [2,4,6] ]
/*~~~~~~~~~~~~EVENT LISTENERS~~~~~~~~~~~~*/
gameBoard.addEventListener('click', validateMove)
newGameButton.addEventListener('click', newGame)
/*~~~~~~~~~~~~functions~~~~~~~~~~~~*/
function validateMove() {
    determineWinner()
    updateScore()
  if (!event.target.classList.contains('selected')) {
    alternatePlayers()
  } else {
      window.alert('Keep Yer Danged Snacks Away From My Danged Snacks!!!')
    }
    determineTie()
}

function determineTie() {
  if (!board.includes("")) {
    playerTurn.innerText = `It's A Tie! Try Again!`
    triggerReset()
  }
}

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
  board.splice(i, 1, item)
  event.target.classList.add(board[i], 'selected')
  determineWinner()
}

function determineWinner() {
  for (var i = 0; i < possibleWins.length; i++) {
    var winCondition = possibleWins[i]
    var a = board[winCondition[0]]
    var b = board[winCondition[1]]
    var c = board[winCondition[2]]
      if (a === "" || b === "" || c === "") {
        continue
      }
      if (a === b && b === c) {
        game.roundWon = true;
        declareWinner()
      }
  }
}

function declareWinner() {
  if (game.currentPlayer === 0) {
    playerTurn.innerText = `Hamburger Wins!! Relish This Moment!`
    player1.wins += 1
    updateScore()
    triggerReset()
  }
  if (game.currentPlayer === 1){
    playerTurn.innerText = `Congrats, Hotdog, You're a Weiner!!`
    player2.wins += 1
    updateScore()
    triggerReset()
  }
}

function updateScore() {
  counterOne.innerText = player1.wins
  counterTwo.innerText = player2.wins
}

function triggerReset() {
  var boardReset = setTimeout(resetBoard, 3000);
  return boardReset
}

function resetBoard() {
  var squares = document.querySelectorAll('.square')
  for (var i = 0; i < squares.length; i++){
    squares[i].classList.remove('selected')
    squares[i].classList.remove('hamburger')
    squares[i].classList.remove('hotdog')
  }
    board = ["", "", "", "", "", "", "", "", ""]
    this.roundWon = false
  if (game.currentPlayer == 0) {
    playerTurn.innerText = `Hotdog, its your turn!`
  } else {
      playerTurn.innerText = `Hamburger, its your turn!`
    }
}

function newGame() {
  location.reload()
}
