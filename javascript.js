let choices = ["rock", "paper", "scissors"]

function getComputerChoice() {
	return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerChoice, computerChoice) {	
		if (playerChoice === computerChoice) {
        return "It's a tie!";
    }
		else if ((playerChoice === "rock" && computerChoice === "scissors") || (playerChoice === "paper" && computerChoice === "rock") || (playerChoice === "scissors" && computerChoice === "paper")) {
        return `You win! ${playerChoice} beats ${computerChoice}.`;
    } 
		else {
        return `You lose! ${computerChoice} beats ${playerChoice}.`;
    }	
}

function game() {
	for (let i = 0; i < 5; i++) {
		const playerChoice = prompt("Choose rock, paper or scissors: ").toLowerCase();
		const computerChoice = getComputerChoice();
		console.log(playRound(playerChoice, computerChoice));
	}
}

game();
