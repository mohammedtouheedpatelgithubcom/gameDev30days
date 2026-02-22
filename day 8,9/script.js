let secretNumber = randomNumber();
let guessAttempts = 0;

const guessInput = document.getElementById("guessInput");
const guessBtn = document.getElementById("guessBtn");
const guessHint = document.getElementById("guessHint");
const attemptsEl = document.getElementById("attempts");
const resetGuessBtn = document.getElementById("resetGuessBtn");

function randomNumber() {
  return Math.floor(Math.random() * 50) + 1;
}

function handleGuess() {
  const guess = Number(guessInput.value);

  if (!guess || guess < 1 || guess > 50) {
    guessHint.innerText = "⚠️ Enter a number from 1 to 50.";
    return;
  }

  guessAttempts += 1;
  attemptsEl.innerText = guessAttempts;

  if (guess === secretNumber) {
    guessHint.innerText = `✅ Correct! The number was ${secretNumber}.`;
  } else if (guess < secretNumber) {
    guessHint.innerText = "📉 Too low! Try again.";
  } else {
    guessHint.innerText = "📈 Too high! Try again.";
  }

  guessInput.value = "";
}

function resetGuessGame() {
  secretNumber = randomNumber();
  guessAttempts = 0;
  attemptsEl.innerText = "0";
  guessHint.innerText = "Start guessing...";
  guessInput.value = "";
}

guessBtn.addEventListener("click", handleGuess);
resetGuessBtn.addEventListener("click", resetGuessGame);

guessInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    handleGuess();
  }
});

let wins = 0;
let losses = 0;
let draws = 0;

const moveButtons = document.querySelectorAll(".move-btn");
const rpsResult = document.getElementById("rpsResult");
const playerMoveEl = document.getElementById("playerMove");
const computerMoveEl = document.getElementById("computerMove");
const winsEl = document.getElementById("wins");
const lossesEl = document.getElementById("losses");
const drawsEl = document.getElementById("draws");
const resetRpsBtn = document.getElementById("resetRpsBtn");

function getComputerMove() {
  const moves = ["rock", "paper", "scissors"];
  return moves[Math.floor(Math.random() * moves.length)];
}

function decideWinner(player, computer) {
  if (player === computer) return "draw";

  if (
    (player === "rock" && computer === "scissors") ||
    (player === "paper" && computer === "rock") ||
    (player === "scissors" && computer === "paper")
  ) {
    return "win";
  }

  return "lose";
}

function playRps(playerMove) {
  const computerMove = getComputerMove();
  const result = decideWinner(playerMove, computerMove);

  playerMoveEl.innerText = playerMove;
  computerMoveEl.innerText = computerMove;

  if (result === "win") {
    wins += 1;
    rpsResult.innerText = "🎉 You win this round!";
  } else if (result === "lose") {
    losses += 1;
    rpsResult.innerText = "😅 Computer wins this round.";
  } else {
    draws += 1;
    rpsResult.innerText = "🤝 It's a draw.";
  }

  winsEl.innerText = wins;
  lossesEl.innerText = losses;
  drawsEl.innerText = draws;
}

function resetRpsScore() {
  wins = 0;
  losses = 0;
  draws = 0;

  winsEl.innerText = "0";
  lossesEl.innerText = "0";
  drawsEl.innerText = "0";

  playerMoveEl.innerText = "-";
  computerMoveEl.innerText = "-";
  rpsResult.innerText = "Make your move!";
}

moveButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const move = button.dataset.move;
    playRps(move);
  });
});

resetRpsBtn.addEventListener("click", resetRpsScore);
