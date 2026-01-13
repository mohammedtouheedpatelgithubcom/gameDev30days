let startTime;
let timeout;
let gameReady = false;
let scores = [];

const box = document.getElementById("gameBox");
const statusText = document.getElementById("statusText");
const result = document.getElementById("result");
const scoreList = document.getElementById("scoreList");

// START GAME
function startGame() {
  gameReady = false;
  result.innerText = "";
  statusText.innerText = "Wait for green...";
  box.className = "game-box bg-danger";

  const randomDelay = Math.random() * 3000 + 2000;

  timeout = setTimeout(() => {
    box.className = "game-box bg-success";
    statusText.innerText = "CLICK NOW!";
    startTime = Date.now();
    gameReady = true;
  }, randomDelay);
}

// CLICK HANDLER
box.addEventListener("click", () => {
  if (!gameReady) {
    result.innerText = "❌ Too early!";
    clearTimeout(timeout);
    return;
  }

  const reactionTime = Date.now() - startTime;
  result.innerText = `⚡ Reaction Time: ${reactionTime} ms`;
  gameReady = false;

  saveScore(reactionTime);
});

// SAVE SCORE
function saveScore(time) {
  scores.push(time);

  const li = document.createElement("li");
  li.className = "list-group-item";
  li.innerText = time + " ms";

  scoreList.prepend(li);
}
