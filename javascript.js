let humanScore = 0;
let computerScore = 0;
let humanChoice = "";

const frases = ["You Win.", "You Lost.", "Draw.", "You Won the Match.", "You Lost the Match."];

const txtHumanChoice = document.querySelector(".h-choice");
const txtCompChoice = document.querySelector(".c-choice");
const txtPlacar = document.querySelector(".placar");

function getComputerChoice() {
  const opcoes = ["ㅤRock", "Paper", "Scissors"];
  return opcoes[Math.floor(Math.random() * 3)];
}

function playRound(humanChoice, compChoice) {
  if (humanChoice === compChoice) {
    return frases[2];
  }

  if (
    (humanChoice === "Rock" && compChoice === "Scissors") ||
    (humanChoice === "Paper" && compChoice === "ㅤRock") ||
    (humanChoice === "Scissors" && compChoice === "Paper")
  ) {
    return frases[0];
  }

  return frases[1];
}

function playGame() {
  if (humanChoice === "") {
    txtPlacar.textContent = "Choose Rock, Paper or Scissors first.";
    return;
  }

  const compChoice = getComputerChoice();
  const result = playRound(humanChoice, compChoice);

  txtCompChoice.textContent = "PC Choice: " + compChoice;

  if (result === frases[0]) {
    humanScore++;
  } else if (result === frases[1]) {
    computerScore++;
  }

  txtPlacar.textContent = result + "  |  You " + humanScore + " x " + computerScore + " PC";

  if (humanScore === 5) {
    txtPlacar.textContent = frases[3] + "  (" + humanScore + " x " + computerScore + ")";
    humanScore = 0;
    computerScore = 0;
  } else if (computerScore === 5) {
    txtPlacar.textContent = frases[4] + "  (" + humanScore + " x " + computerScore + ")";
    humanScore = 0;
    computerScore = 0;
  }
}

function escolher(opcao) {
  humanChoice = opcao;
  txtHumanChoice.textContent = "Your Choice: " + humanChoice;
}

document.querySelector("#btn-rock").onclick = () => escolher("ㅤRock");
document.querySelector("#btn-paper").onclick = () => escolher("Paper");
document.querySelector("#btn-scissors").onclick = () => escolher("Scissors");

document.querySelector("#btn-play").addEventListener("click", playGame);