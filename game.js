class Game {
  constructor() {
    this.rowsLength = 5;
    this.columnsLength = 5;
    this.mineLength = 5;
    this.board = [];
    this.minesPosition = [
      [0, 0],
      [1, 0],
      [2, 0],
      [3, 0],
      [4, 0],
    ];
  }

  generateBoard() {
    for (let i = 0; i < this.rowsLength; i++) {
      this.board.push([]);

      for (let j = 0; j < this.columnsLength; j++) {
        this.board[i][j] = 0;
      }
    }
  }

  insertMines() {
    for (let i = 0; i < this.minesPosition.length; i++) {
      const row = this.minesPosition[i][0];
      const column = this.minesPosition[i][1];

      this.board[row][column] = "Mine";
    }
  }

  restart() {
    this.board = [];
  }
}
