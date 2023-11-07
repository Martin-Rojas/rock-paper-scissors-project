const getComputerChoice = () => {
  const choices = ["rock", "paper", "scissors"];

  const randomNum = Math.floor(Math.random() * 3);

  return choices[randomNum];
};

const playerSelection = "rock";

function playRound(playerSelection, getComputerChoice) {
  if (playerSelection == "rock" && getComputerChoice == "paper") {
    return `You lose, paper beats rock`;
  } else if (playerSelection == "rock" && getComputerChoice == "scissors") {
    return `You win, rock beats scissors`;
  } else {
    return `its a tie!`;
  }
}

console.log(playRound(playerSelection, getComputerChoice()));