//refactored

function computerChoosesSquare(board) {
  for (let index = 0; index < WINNING_LINES.length; index++) {
    let line = WINNING_LINES[index];
    let square =
      findAtRiskSquare(line, board, COMPUTER_MARKER) ||
      findAtRiskSquare(line, board, HUMAN_MARKER);
    if (square) return gameMarker(board, square);
  }

  let square = board["5"] === INITIAL_MARKER ? "5" : randomSquare(board);
  return gameMarker(board, square);
}
//Helper for computerChoosesSquare offense and defense
function gameMarker(board, square) {
  return (board[square] = COMPUTER_MARKER);
}
//Helper for computerChoosesSquare, random
function randomSquare(board) {
  let emptySqrs = emptySquares(board);
  return emptySqrs[Math.floor(Math.random() * emptySqrs.length)];
}
