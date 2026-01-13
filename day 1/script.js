console.log("Game Hub Loaded");

// GAME STATE
let score = 0;

// SHOW GAME
function showGame() {
  document.getElementById("gameArea").classList.remove("d-none");
}

// INCREASE SCORE
function increaseScore() {
  score++;
  document.getElementById("score").innerText = score;

  // LEVEL UP LOGIC
  if (score === 10) {
    alert("🎉 Level Up!");
  }
}

// RESET GAME
function resetScore() {
  score = 0;
  document.getElementById("score").innerText = score;
}
