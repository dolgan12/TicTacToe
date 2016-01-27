var board = [0,0,0,0,0,0,0,0,0];
var square = 'square' + firstMove();
document.getElementById(square).innerHTML = 'X';

/*
MiniMax:
1. Generete tree of all possible moves
2.Each position or node of the tree holds a Heuristic value
3 Algorith then starts from botom of tree, deciding best move for that player and removing all bad moves.
*/

/* Create a game object */
var TicTacToe = function(){
  this.player = 'o';
  this.computer = 'x';
};


/* Win state
  all winning combinations in if-statement
*/

TicTacToe.prototype.checkWin = function(player, board){
  if(
      (board[0] == player && board[1] == player && board[2] == player) ||
      (board[3] == player && board[4] == player && board[5] == player) ||
      (board[6] == player && board[7] == player && board[8] == player) ||
      (board[0] == player && board[3] == player && board[6] == player) ||
      (board[1] == player && board[4] == player && board[7] == player) ||
      (board[2] == player && board[5] == player && board[8] == player) ||
      (board[0] == player && board[4] == player && board[8] == player) ||
      (board[2] == player && board[4] == player && board[6] == player)
 ){
   return true;
 }else{
   return false;
 }
};

/* check for a tie
  loop the board and if a square is empty return false;
*/
TicTacToe.prototype.checkTie = function(board){
  for(var i = 0; i < bord.length; i ++){
    if(board[i] === 0){
      return false;
    }
  }
  return true;
};

/* Place in random corner or center
  random even  up to 8.
*/
TicTacToe.prototype.firstMove = function(){
  return Math.floor(Math.random() * (5)) * 2;
};
TicTacToe.prototype.copyBoard = function(board){
  return board.slice(0);
};

TicTacToe.prototype.checkMove = function(player, move, board){
  var newBoard = this.copyBoard(board);
  if(newBoard[move] === 0){
    newBoard[move] = player;
    return newBoard;
  }else {
    return null;
  }
};

TicTacToe.prototype.findMove = function(board){
  var bestMoveValue = -100;
  var move = 0;
  for(var i = 0; i < bord.length; i++){
    var newBoard = this.checkMove(i, this.computer, board);
    if(newBoard){
      var predictedMoveValue = this.minValue(newBoard);
      if(predictedMoveValue > bestMoveValue) {
        bestMoveValue = predictedMoveValue;
        move = i;
      }
    }
  }
  return move;
};
TicTacToe.prototype.minValue = function(board){
  if(this.checkWin(this.player, board)) {
    return -1;
  }else if (this.checkTie(board)) {
    return 0;
  }else if(this.checkWin(this.computer, board)){
    return 1;
  }else {
    var bestMoveValue = 100;
    var move = 0;
    for(var i = 0; i < bord.length; i++){
      var newBoard = this.checkMove(i, this.player, board);
      if(newBoard){
        var predictedMoveValue = this.maxValue(newBoard);
        if(predictedMoveValue < bestMoveValue) {
          bestMoveValue = predictedMoveValue;
          move = i;
        }
      }
    }
    return bestMoveValue;
  }
};
TicTacToe.prototype.maxValue = function(board){
  if(this.checkWin(this.player, board)) {
    return -1;
  }else if (this.checkTie(board)) {
    return 0;
  }else if(this.checkWin(this.computer, board)){
    return 1;
  }else {
    var bestMoveValue = -100;
    var move = 0;
    for(var i = 0; i < bord.length; i++){
      var newBoard = this.checkMove(i, this.computer, board);
      if(newBoard){
        var predictedMoveValue = this.maxValue(newBoard);
        if(predictedMoveValue > bestMoveValue) {
          bestMoveValue = predictedMoveValue;
          move = i;
        }
      }
    }
    return bestMoveValue;
  }
};
