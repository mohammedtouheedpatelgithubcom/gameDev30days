let startTime;
let timeout;
let gameReady = false;
let scores = JSON.parse(localStorage.getItem("scores")) || [];

const box = document.getElementById("gameBox");
const statusText = document.getElementById("statusText");
const result = document.getElementById("result");
const scoreList = document.getElementById("scoreList");
const bestTimeEl = document.getElementById("bestTime");
const startBtn = document.getElementById("startBtn");
const clickSound = document.getElementById("clickSound");

// INITIAL LOAD
updateScoreUI();
updateBestTime();

// START GAME
function startGame() {
  gameReady = false;
  result.innerText = "";
  statusText.innerText = "Wait for green...";
  startBtn.disabled = true;

  box.className = "game-box bg-danger";

  // RANDOM SIZE EACH ROUND
  const size = Math.floor(Math.random() * 150) + 150;
  box.style.width = size + "px";
  box.style.height = size + "px";

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
    startBtn.disabled = false;
    return;
  }

  clickSound.play();

  const reactionTime = Date.now() - startTime;
  result.innerText = `⚡ Reaction Time: ${reactionTime} ms`;
  gameReady = false;
  startBtn.disabled = false;

  saveScore(reactionTime);
});

// SAVE SCORE
function saveScore(time) {
  scores.push(time);
  localStorage.setItem("scores", JSON.stringify(scores));
  updateScoreUI();
  updateBestTime();
}

// UPDATE SCORE LIST
function updateScoreUI() {
  scoreList.innerHTML = "";
  scores.slice().reverse().forEach(time => {
    const li = document.createElement("li");
    li.className = "list-group-item";
    li.innerText = time + " ms";
    scoreList.appendChild(li);
  });
}

// BEST TIME
function updateBestTime() {
  if (scores.length === 0) return;
  bestTimeEl.innerText = Math.min(...scores);
}
