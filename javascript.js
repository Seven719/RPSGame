let choices = ["rock", "paper", "scissors"]

function getComputerChoice() {
	return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerChoice, computerChoice) {	
}

const playerChoice = prompt("Choose rock, paper or scissors: ").toLowerCase();
const computerChoice = getComputerChoice();

console.log(playRound(playerChoice, computerChoice));
