const resultDiv = document.getElementById("result");
const playerScoreDiv = document.getElementById("player-score");
const handsDiv = document.getElementById("hands");
let totalScore = 0;

const getComputerChoice = () => {
  let options = ["Rock", "Paper", "Scissors"];
  return options[Math.floor(Math.random() * 3)];
};

function getResult(playerChoice, computerChoice) {
  
    if (playerChoice === computerChoice) {
    return 0;
  } else if (playerChoice === "Rock" && computerChoice === "Scissors") {
    return 1;
  } else if (playerChoice === "Paper" && computerChoice === "Rock") {
    return 1;
  } else if (playerChoice === "Scissors" && computerChoice === "Paper") {
    return 1;
  } else {
    return -1;
  }

}

function showResult(score, playerChoice, computerChoice) {

  if (score === -1) {
    resultDiv.innerText = `You Lose!`;
    handsDiv.innerText = `👨 ${playerChoice} vs 🤖${computerChoice}`;
    playerScoreDiv.innerText = `${--totalScore}`;
  } else if (score === 1) {
    resultDiv.innerText = `You Won!`;
    handsDiv.innerText = `👨 ${playerChoice} vs 🤖${computerChoice}`;
    playerScoreDiv.innerText = `${++totalScore}`;
  } else {
    resultDiv.innerText = `It's a Draw!`;
    handsDiv.innerText = `👨 ${playerChoice} vs 🤖${computerChoice}`;
    playerScoreDiv.innerText = `${totalScore}`;
  }

}

function onClickRPS(playerChoice) {
  let computerChoice = getComputerChoice();
  
  let score = getResult(playerChoice, computerChoice);
  showResult(score, playerChoice, computerChoice);
}

function playGame() {
  const userOptions = document.querySelectorAll(".rpsButton");
  userOptions.forEach((userOption) => {
    userOption.onclick = () => onClickRPS(userOption.value);
  });
}

function endGame() {
  playerScoreDiv.textContent = "";
  handsDiv.textContent = "";
  totalScore = 0;
  resultDiv.textContent = "";
}

playGame();
