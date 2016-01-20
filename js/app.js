var board = [0,0,0,0,0,0,0,0,0];
var square = 'square' + firstMove();
document.getElementById(square).innerHTML = 'X';

/*
MiniMax:
1. Generete tree of all possible moves
2.Each position or node of the tree holds a Heuristic value
3 Algorith then starts from botom of tree, deciding best move for that player and removing all bad moves.
*/


/* Win state
  all winning combinations in if-statement
*/

function checkWin(player, board){
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
}

/* check for a tie
  loop the board and if a square is empty return false;
*/
function checkTie(board){
  for(var i = 0; i < bord.length; i ++){
    if(board[i] === 0){
      return false;
    }
  }
  return true;
}

/* Place in random corner or center
  random even  up to 8.
*/
function firstMove(){
  return Math.floor(Math.random() * (5)) * 2;
}
