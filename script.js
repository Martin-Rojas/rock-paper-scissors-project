const rockElement = document.querySelector("#rock");
const paperElement = document.querySelector("#paper");
const scissorsElement = document.querySelector("#scissors");
const scoreBoardElement = document.querySelector("#score-board");
const playerScoreUi = document.querySelector("#player-score");
const computerScoreUi = document.querySelector("#computer-score");
const winnerUi = document.querySelector("#winner");
const btnNewGameElement = document.querySelector(".newGameBtn");
const btnNewGame = document.createElement("button");

let playerWinnigNumber = 0;
let computerWinnigNumber = 0;
let gameRound = 0;

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
    return 0;
  }
}

const addScore = (result) => {
  if (result === 1) {
    playerWinnigNumber += 1;
    playerScoreUi.textContent = `Player Score: ${playerWinnigNumber}`;
  } else if (result === 2) {
    computerWinnigNumber += 1;
    computerScoreUi.textContent = `Computer Score: ${computerWinnigNumber}`;
  }
};

const getWinner = (playerWinnigNumber, computerWinnigNumber) => {
  if (playerWinnigNumber > computerWinnigNumber) {
    return `You win!!`;
  } else if (playerWinnigNumber < computerWinnigNumber) {
    return `You lose `;
  } else {
    return `its a tie`;
  }
};

const newGame = () => {
  scoreBoardElement.textContent = `Game Round: 0`;
  playerScoreUi.textContent = `Player Score: ${playerWinnigNumber}`;
  computerScoreUi.textContent = `Computer Score: ${computerWinnigNumber}`;
};

const resetGame = (btnNewGame) => {
  newGame();
  rockElement.disabled = false;
  paperElement.disabled = false;
  scissorsElement.disabled = false;
  btnNewGameElement.removeChild(btnNewGame);
  winnerUi.textContent = ``;
};

/*disable btns when it reaches 5 games played
  and reset all points scored by players*/
const endGame = () => {
  winnerUi.textContent = getWinner(playerWinnigNumber, computerWinnigNumber);
  gameRound = 0;
  playerWinnigNumber = 0;
  computerWinnigNumber = 0;
  rockElement.disabled = true;
  paperElement.disabled = true;
  scissorsElement.disabled = true;
};

newGame();

rockElement.addEventListener("click", (event) => {
  const playerSelection = event.target.alt;
  const computerSelection = getComputerChoice();
  const result = playRound(playerSelection, computerSelection);
  // create a new game btn
  // const btnNewGame = document.createElement("button");

  addScore(result);
  gameRound += 1;
  scoreBoardElement.textContent = `Game Round: ${gameRound}`;

  if (gameRound >= 5) {
    endGame();

    btnNewGame.textContent = "New Game";
    btnNewGameElement.appendChild(btnNewGame);
    btnNewGame.addEventListener("click", () => {
      resetGame(btnNewGame);
    });
  }
});

paperElement.addEventListener("click", (event) => {
  const playerSelection = event.target.alt;
  const computerSelection = getComputerChoice();
  const result = playRound(playerSelection, computerSelection);

  addScore(result);
  gameRound += 1;
  scoreBoardElement.textContent = `Game Round: ${gameRound}`;

  if (gameRound >= 5) {
    endGame();

    btnNewGame.textContent = "New Game";
    btnNewGameElement.appendChild(btnNewGame);
    btnNewGame.addEventListener("click", () => {
      resetGame(btnNewGame);
    });
  }
});

scissorsElement.addEventListener("click", (event) => {
  const playerSelection = event.target.alt;
  const computerSelection = getComputerChoice();
  const result = playRound(playerSelection, computerSelection);

  addScore(result);
  gameRound += 1;
  scoreBoardElement.textContent = `Game Round: ${gameRound}`;

  if (gameRound >= 5) {
    endGame();

    btnNewGame.textContent = "New Game";
    btnNewGameElement.appendChild(btnNewGame);
    btnNewGame.addEventListener("click", () => {
      resetGame(btnNewGame);
    });
  }
});
