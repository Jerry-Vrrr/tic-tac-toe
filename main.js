/*~~~~~~~~~~~~QUERY SELECTORS~~~~~~~~~~~~*/
var gameBoard = document.querySelector('.game-board')
var counterOne = document.querySelector('#counterOne')
var counterTwo = document.querySelector('#counterTwo')
var playerTurn = document.querySelector('.player-turn')
var player1Section = document.querySelector('.player-one')
var player2Section = document.querySelector('.player-two')
var gameSection = document.querySelector('.game-section')
var startScreen = document.querySelector('.start-screen')
var newGameButton = document.querySelector('.start-new-game')
var startButton = document.querySelector('.start-button')
/*~~~~~~~~~~~~GAMEPLAY VARIABLES~~~~~~~~~~~~*/
var burger = `<img src='https://www.svgrepo.com/show/43115/burger.svg'>`
var hotdog = `<img src='https://www.svgrepo.com/show/14909/hot-dog.svg'>`
var player1 = new Player('Hamburger', burger)
var player2 = new Player('Hotdog', hotdog)
var game = new Game(player1, player2)
/*~~~~~~~~~~~~EVENT LISTENERS~~~~~~~~~~~~*/
gameBoard.addEventListener('click', validateMove)
newGameButton.addEventListener('click', newGame)
startButton.addEventListener('click', hideStartScreen)
/*~~~~~~~~~~~~functions~~~~~~~~~~~~*/
function validateMove() {
    updateScore()
    playMusic()
  if (!event.target.classList.contains('selected')) {
    alternatePlayers()
  } else {
      window.alert('Keep Yer Danged Snacks Away From My Danged Snacks!!!')
    }
    determineTie()
}

function determineTie() {
  if (!game.board.includes("")) {
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
  game.board.splice(i, 1, item)
  event.target.classList.add(game.board[i], 'selected')
  game.determineWinner()
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
    game.board = ["", "", "", "", "", "", "", "", ""]
  if (game.currentPlayer == 0) {
    playerTurn.innerText = `Hotdog, its your turn!`
  } else {
      playerTurn.innerText = `Hamburger, its your turn!`
    }
}

function newGame() {
  location.reload()
}

function playMusic() {
  var music = document.querySelector('.audio')
  music.play()
  music.volume = 0.2
}

function hideStartScreen() {
  startScreen.classList.add('hidden')
  show(player1Section)
  show(player2Section)
  show(gameSection)
  playMusic()
}

function show(section) {
  section.classList.remove('hidden')
}
