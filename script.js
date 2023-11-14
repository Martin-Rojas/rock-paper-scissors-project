const getComputerChoice = () => {
  const choices = ["rock", "paper", "scissors"];

  const randomNum = Math.floor(Math.random() * 3);

  return choices[randomNum];
};

function playRound(playerSelection, getComputerChoice) {
  if (playerSelection == "rock" && getComputerChoice == "paper") {
    return 2;
  } else if (playerSelection == "rock" && getComputerChoice == "scissors") {
    return 1;
  } else if (playerSelection == "scissors" && getComputerChoice == "rock") {
    return 2;
  } else if (playerSelection == "scissors" && getComputerChoice == "paper") {
    return 1;
  } else if (playerSelection == "paper" && getComputerChoice == "rock") {
    return 1;
  } else if (playerSelection == "paper" && getComputerChoice == "scissors") {
    return 2;
  } else {
    return `its a tie!`;
  }
}

let playerWinnigNumber = 0;
let computerWinnigNumber = 0;

// for (let games = 0; games < 5; games++) {
//   const playerSelection = prompt(`rock, paper, scissors go! : `);
//   let result = playRound(playerSelection, getComputerChoice());
  
//   if (result === 1) {
//     playerWinnigNumber += 1;
//   } else if (result === 2) {
//     computerWinnigNumber += 1;
//   } else {
//     console.log(`tie`);
//   }
// }

if (playerWinnigNumber > computerWinnigNumber) {
  console.log(`You win!!`);
} else if (playerWinnigNumber < computerWinnigNumber) {
  console.log(`You lose `);
} else {
  console.log(`its a tie`);
}

console.log(
  `player point ${playerWinnigNumber} computer players: ${computerWinnigNumber}`
);
