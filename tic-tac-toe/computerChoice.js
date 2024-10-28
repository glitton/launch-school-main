function computerChoosesSquare(board) {
  let square;

  // offense
  if (!square) {
    for (let index = 0; index < WINNING_LINES.length; index++) {
      let line = WINNING_LINES[index];
      square = findAtRiskSquare(line, board, COMPUTER_MARKER);
      if (square) {
        return square;
      } else {
        square = findAtRiskSquare(line, board, HUMAN_MARKER);
        return square;
      }
    }
  }
  // // defense first
  // for (let index = 0; index < WINNING_LINES.length; index++) {
  //   let line = WINNING_LINES[index];
  //   square = findAtRiskSquare(line, board, HUMAN_MARKER);
  //   if (square) break;
  // }

  // pick square 5 and random
  if (board["5"] === INITIAL_MARKER) {
    square = "5";
  } else if (!square) {
    let randomIndex = Math.floor(Math.random() * emptySquares(board).length);
    square = emptySquares(board)[randomIndex];
  }

  board[square] = COMPUTER_MARKER;
}
