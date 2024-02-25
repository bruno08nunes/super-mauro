import { resetGame } from "./game.js";
import { startGame } from "./menu.js";

const buttonStart = document.querySelector("#new-game");
const buttonCredits = document.querySelector("#credits");
const resetButton = document.querySelector("#reset");

buttonStart.addEventListener("click", startGame);
resetButton.addEventListener("click", resetGame);
buttonCredits.addEventListener("click", () =>
    alert("Jogo criado por Bruno Nunes")
);