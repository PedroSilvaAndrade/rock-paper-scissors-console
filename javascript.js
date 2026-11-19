let humanScore = 0;
let computerScore = 0;
let humanChoice = "";

function getComputerChoice() {
  const variable = Math.floor(Math.random() * 3);
  if (variable === 0) {
    return "Rock";
  } else if (variable === 1) {
    return "Scissors";
  } else {
    return "Paper";
  }
}

function getHumanChoice() {
  if (humanChoice === "rock") {
    return 0;
  } else if (humanChoice === "paper") {
    return 1;
  } else {
    return 2;
  }
}

function playRound(humanChoice, compChoice) {
  if (humanChoice === 0 && compChoice === "Rock") {
    return "Draw.";
  } else if (humanChoice === 0 && compChoice === "Scissors") {
    return "You Win.";
  } else if (humanChoice === 0 && compChoice === "Paper") {
    return "You Lost.";
  } else if (humanChoice === 1 && compChoice === "Rock") {
    return "You Win.";
  } else if (humanChoice === 1 && compChoice === "Scissors") {
    return "You Lost.";
  } else if (humanChoice === 1 && compChoice === "Paper") {
    return "Draw.";
  } else if (humanChoice === 2 && compChoice === "Rock") {
    return "You Lost.";
  } else if (humanChoice === 2 && compChoice === "Scissors") {
    return "Draw.";
  } else if (humanChoice === 2 && compChoice === "Paper") {
    return "You Win.";
  }
}

function playGame() {
    const result = playRound(getHumanChoice(), getComputerChoice());
    console.log(result);

    if (result === "You Win.") {
      humanScore++;
    } else if (result === "You Lost.") {
      computerScore++;
    }

    console.log("You: " + humanScore + " | Computer: " + computerScore);


  if (humanScore === 5) {
    console.log("You Won The Match.");
  } else if (computerScore === 5) {
    console.log("You Lost The Match.");
  }
}

const txtHumanChoice = document.querySelector(".h-choice")

const btnRock = document.querySelector("#btn-rock");
const btnPaper = document.querySelector("#btn-paper");
const btnScissors = document.querySelector("#btn-scissors")

btnRock.onclick = () => { humanChoice = "ㅤRock"; txtHumanChoice.textContent = "Your Choice: " + humanChoice;}
btnPaper.onclick = () => { humanChoice = "ㅤPaper"; txtHumanChoice.textContent = "Your Choice: " + humanChoice;}
btnScissors.onclick = () => { humanChoice = "ㅤScissors"; txtHumanChoice.textContent = "Your Choice: " + humanChoice;}

const btnPlay = document.querySelector("#btn-play")
btnPlay.onclick = () => {playGame; let c = document.querySelector(".c-choice"); c.textContent = "PC Choice: " + "ㅤㅤㅤ" + getComputerChoice();}



