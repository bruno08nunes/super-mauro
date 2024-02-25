const mario = document.querySelector(".mario");
const pipe = document.querySelector(".pipe");

// Jump
let cancelJump;
let isJumping = false;

const resetJump = () => {
    mario.classList.remove("jump");
    isJumping = false;
};

export const jump = (e) => {
    const keyJump =
        e.key === " " || e.key.toLowerCase() === "w" || e.key === "ArrowUp";
    if (keyJump && !isJumping) {
        isJumping = true;
        mario.classList.add("jump");
        cancelJump = setTimeout(resetJump, 500);
    }
};

// Game
let rAF,
    isGameOver = false,
    count = 0;
export const game = () => {
    const pipeHeight = matchMedia("(width <= 50em)").matches ? 70 : 100;
    const pipeIdealPosition = matchMedia("(width <= 50em)").matches ? 100 : 120;
    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window
        .getComputedStyle(mario)
        .bottom.replace("px", "");

    if (!isGameOver && rAF % 2 === 0) {
        count++;
    }
    const divCount = document.querySelector(".count");
    divCount.textContent = count;

    const MarioIsNotOverPipe =
        pipePosition <= pipeIdealPosition && pipePosition > 0;
    const MarioIsJumpingTallEnough = marioPosition <= pipeHeight;

    if (MarioIsNotOverPipe && MarioIsJumpingTallEnough && !isGameOver) {
        pipe.classList.add("paused");
        mario.classList.add("paused");
        clearTimeout(cancelJump);

        mario.src = "assets/game-over.png";
        mario.classList.add("mario-game-over");

        const divGameOver = document.querySelector(".game-over");
        divGameOver.style.display = "flex";
        
        isGameOver = true;
        
        cancelAnimationFrame(rAF);
    }
    
    rAF = requestAnimationFrame(game);
};

export const resetGame = () => {
    pipe.style.animation = "none";
    
    pipe.classList.remove("paused");
    mario.classList.remove("paused");
    mario.classList.remove("mario-game-over");
    resetJump();
    
    const divGameOver = document.querySelector(".game-over");
    divGameOver.style.display = "none";

    isGameOver = false;
    count = 0;

    mario.src = "assets/mario.gif";

    setTimeout(() => (pipe.style.animation = ""), 1);
};
