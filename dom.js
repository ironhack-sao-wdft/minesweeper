const btnStartGame = document.getElementById("start-game");
const gameBoardSpace = document.getElementById("game-board");

btnStartGame.addEventListener("click", () => {
  btnStartGame.classList.add("hidden");

  const game = new Game();

  game.generateBoard();
  game.insertMines();

  console.log(game.board);

  for (let i = 0; i < game.board.length; i++) {
    const row = document.createElement("div");
    gameBoardSpace.appendChild(row);

    for (let j = 0; j < game.board[i].length; j++) {
      const littleSquare = document.createElement("button");
      littleSquare.classList.add("square");
      row.appendChild(littleSquare);

      littleSquare.addEventListener("click", () => {
        if (game.board[i][j] === "Mine") {
          window.alert("Você perdeu!");

          const squares = document.getElementsByClassName("square");

          for (let i = 0; i < squares.length; i++) {
            squares[i].setAttribute("disabled", "true");
          }

          const btnRestartGame = document.createElement("button");
          btnRestartGame.classList.add("btn");
          btnRestartGame.classList.add("btn-primary");
          btnRestartGame.innerText = "Reiniciar";

          btnRestartGame.addEventListener("click", () => {
            // window.location.reload();

            game.restart();
            gameBoardSpace.innerHTML = "";
            btnStartGame.classList.remove("hidden");
          });

          gameBoardSpace.appendChild(btnRestartGame);
        }

        littleSquare.innerText = game.board[i][j];
        littleSquare.setAttribute("disabled", "true");
      });
    }
  }
});
