/*Make a Tracker of both computer and user scores*/
let humanScore = 0;
let computerScore = 0;

/*Make Computer choose betweeen 3 choices(rock, paper, sissors)*/
function getComputerChoice () {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}


/*Make a Prompt where User types rock, paper or sissors*/
function getHumanChoice () {
  let choice = prompt("Please type rock, paper or scissors").toLowerCase();
  if (choice === "rock" || choice === "paper" || choice === "scissors") {
    return choice;
  } else {
    alert("You typed an invalid choice.");
    return null;
  }
}

/*Make a function called playRound that play one round, incraments the winner by 1 and starts new round*/
function playRound(humanChoice, computerChoice) {
  if (humanChoice === "rock" && computerChoice === "scissors") {
    humanScore++;
    console.log("Congrats, You win! Rock beats Scissors.");
  } else if (humanChoice === "scissors" && computerChoice === "paper") {
    humanScore++;
    console.log("Congrats, You win! Scissors beats Paper.");
  } else if (humanChoice === "paper" && computerChoice === "rock") {
    humanScore++;
    console.log("Congrats, You win! Paper beats Rock.");
  } else if (computerChoice === "rock" && humanChoice === "scissors") {
    computerScore++;
    console.log("Oops, Computer wins! Rock beats Scissors.");
  } else if (computerChoice === "scissors" && humanChoice === "paper") {
    computerScore++;
    console.log("Oops, Computer wins! Scissors beats Paper.");
  } else if (computerChoice === "paper" && humanChoice === "rock") {
    computerScore++;
    console.log("Oops, Computer wins! Paper beats Rock.");
  } else if (humanChoice === computerChoice) {
    console.log("It's a tie! No points.");
  }
}


/*Make a function called playGame that calls playRound 5 times before declaring a winner*/
function playGame() {
  for (let i = 0; i < 5; i++) {
    let humanChoice = getHumanChoice();
    if (humanChoice !== null) {
      let computerChoice = getComputerChoice();
      console.log(`Round ${i + 1}: Human chose ${humanChoice}, Computer chose ${computerChoice}`);
      playRound(humanChoice, computerChoice);
    }
  }

  // Declare the winner
  if (humanScore > computerScore) {
    console.log("Congratulations! You won the game.");
  } else if (humanScore < computerScore) {
    console.log("Oops, Computer won the game.");
  } else {
    console.log("It's a Tie!");
  }
}
// Start the game
playGame();

/*Final Scores*/
console.log("Final Scores:");
console.log(`Human: ${humanScore}`);
console.log(`Computer: ${computerScore}`);