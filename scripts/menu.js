import { jump, game as runGame } from "./game.js";

const menu = document.querySelector(".menu");
const gameBoard = document.querySelector(".game-board");

export const startGame = () => {
    menu.style.display = "none";
    gameBoard.style.display = "block";

    document.addEventListener("keydown", jump);
    runGame();
};
