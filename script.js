// Variables to store player choice and the result message to display
let playerChoice;
let resultMessage = "";

// Score trackers for both human and computer
let humanScore = 0;
let computerScore = 0;

// Function to randomly select computer's choice (rock, paper, or scissors)
function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

// Function to play a single round, update scores, and return a message about the round outcome
function playRound(humanChoice, computerChoice) {
  let message = "";
  
  if (humanChoice === "rock" && computerChoice === "scissors") {
    humanScore++;
    message = "Congrats, You win! Computer chose Scissors, Rock beats Scissors.";
    return message;
  } else if (humanChoice === "scissors" && computerChoice === "paper") {
    humanScore++;
    message = "Congrats, You win! Computer chose Paper, Scissors beats Paper.";
    return message;
  } else if (humanChoice === "paper" && computerChoice === "rock") {
    humanScore++;
    message = "Congrats, You win! Computer chose Rock, Paper beats Rock.";
    return message;
  } else if (computerChoice === "rock" && humanChoice === "scissors") {
    computerScore++;
    message = "Oops, Computer chose Rock! Rock beats Scissors.";
    return message;
  } else if (computerChoice === "scissors" && humanChoice === "paper") {
    computerScore++;
    message = "Oops, Computer chose Scissors! Scissors beats Paper.";
    return message;
  } else if (computerChoice === "paper" && humanChoice === "rock") {
    computerScore++;
    message = "Oops, Computer chose Paper! Paper beats Rock.";
    return message;
  } else if (humanChoice === computerChoice) {
    message = "It's a tie! No points.";
    return message;
  }
}

// Event listeners for each button — when clicked:
// 1. Set the player's choice based on the button clicked
// 2. Play a round by comparing player's choice and computer's random choice
// 3. Update the displayed scores and result message on the webpage
// 4. Check if either player has reached the winning score
let btnrock = document.querySelector("#rock");
btnrock.addEventListener("click", (event) => {
  playerChoice = "rock";
  resultMessage = playRound(playerChoice, getComputerChoice());
  document.getElementById("human-score").textContent = humanScore;
  document.getElementById("computer-score").textContent = computerScore;
  document.getElementById("result").textContent = resultMessage;
  checkWinner();
});

let btnpaper = document.querySelector("#paper");
btnpaper.addEventListener("click", (event) => {
  playerChoice = "paper";
  resultMessage = playRound(playerChoice, getComputerChoice());
  document.getElementById("human-score").textContent = humanScore;
  document.getElementById("computer-score").textContent = computerScore;
  document.getElementById("result").textContent = resultMessage;
  checkWinner();
});

let btnscissors = document.querySelector("#scissors");
btnscissors.addEventListener("click", (event) => {
  playerChoice = "scissors";
  resultMessage = playRound(playerChoice, getComputerChoice());
  document.getElementById("human-score").textContent = humanScore;
  document.getElementById("computer-score").textContent = computerScore;
  document.getElementById("result").textContent = resultMessage;
  checkWinner();
});

// Function to check if either player or computer reached 5 points to declare a winner
function checkWinner() {
  if (humanScore >= 5) {
    alert("🎉 Congratulations! You won the game.");
    resetGame();
  } else if (computerScore >= 5) {
    alert("😞 Oops, Computer won the game.");
    resetGame();
  }
}

// Function to reset the scores and result message on the UI after game ends
function resetGame() {
  humanScore = 0;
  computerScore = 0;
  resultMessage = "";
  document.getElementById("human-score").textContent = humanScore;
  document.getElementById("computer-score").textContent = computerScore;
  document.getElementById("result").textContent = resultMessage;
}
