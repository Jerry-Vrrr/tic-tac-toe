


class Game {
  constructor(player1, player2) {
    this.players = [player1, player2]
    this.currentPlayer = 0;
    this.board = ["", "", "", "", "", "", "", "", ""]
    this.possibleWins = [ [0,1,2], [3,4,5], [6,7,8], [0,3,6],
      [1,4,7], [2,5,8], [0,4,8], [2,4,6] ]
  }

  determineWinner() {
    for (var i = 0; i < this.possibleWins.length; i++) {
      var winCondition = this.possibleWins[i]
      var a = game.board[winCondition[0]]
      var b = game.board[winCondition[1]]
      var c = game.board[winCondition[2]]
        if (a === "" || b === "" || c === "") {
          continue
        }
        if (a === b && b === c) {
          declareWinner()
        }
    }
  }
}
