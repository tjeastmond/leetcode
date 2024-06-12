class TicTacToe {
  constructor() {
    this.board = Array(9).fill(null);
    this.currentPlayer = "X";
    this.init();
  }

  init() {
    this.drawBoard();
  }

  checkWin() {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8], // Rows
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8], // Columns
      [0, 4, 8],
      [2, 4, 6], // Diagonals
    ];
    for (let line of lines) {
      const [a, b, c] = line;
      if (
        this.board[a] &&
        this.board[a] === this.board[b] &&
        this.board[a] === this.board[c]
      ) {
        return this.board[a];
      }
    }
    return null;
  }

  isDraw() {
    return this.board.every((cell) => cell !== null);
  }

  makeMove(index) {
    if (!this.board[index] && !this.checkWin()) {
      this.board[index] = this.currentPlayer;
      this.currentPlayer = this.currentPlayer === "X" ? "O" : "X";
      this.drawBoard();
      const winner = this.checkWin();
      if (winner) {
        alert(`${winner} wins!`);
        this.reset();
      } else if (this.isDraw()) {
        alert("It's a draw!");
        this.reset();
      }
    }
  }

  reset() {
    this.board.fill(null);
    this.drawBoard();
  }

  drawBoard() {
    const boardElement = document.getElementById("board");
    boardElement.innerHTML = "";
    this.board.forEach((cell, index) => {
      const cellElement = document.createElement("div");
      cellElement.className = "cell";
      cellElement.textContent = cell;
      cellElement.addEventListener("click", () => this.makeMove(index));
      boardElement.appendChild(cellElement);
    });
  }
}

const game = new TicTacToe();
// space complexity: O(1)
