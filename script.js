const getComputerChoice = () => {
  const choices = ["rock", "paper", "scissors"];

  const randomNum = Math.floor(Math.random() * 3);

  return choices[randomNum];
};

console.log(getComputerChoice());
