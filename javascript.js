let choices = ["rock", "paper", "scissors"]
let currentUserPoints = 0;
let currentComputerPoints = 0;

function getComputerChoice() {
	return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(getUserChoice) {
	const playerChoice = getUserChoice;
	const computerChoice = getComputerChoice();
	if (playerChoice === computerChoice) {
		console.log("It's a tie!");
	}
	else if ((playerChoice === "rock" && computerChoice === "scissors") || (playerChoice === "paper" && computerChoice === "rock") || (playerChoice === "scissors" && computerChoice === "paper")) {
		console.log(`You win! ${playerChoice} beats ${computerChoice}.`);
		currentUserPoints += 1;
	} 
	else {
		console.log(`You lose! ${computerChoice} beats ${playerChoice}.`);
		currentComputerPoints += 1;
	}	
}

const container = document.querySelector('#container')

const btnRock = document.createElement('button');
btnRock.textContent = "Rock";
const btnScissors = document.createElement('button');
btnScissors.textContent = "Scissors"
const btnPaper = document.createElement('button');
btnPaper.textContent = "Paper";
const userPoints = document.createElement('div');
const computerPoints = document.createElement('div');
const finalResult = document.createElement('div');

let buttons = [btnRock, btnPaper, btnScissors];

for (let i = 0; i < buttons.length; i++) {
	container.appendChild(buttons[i]);
}


function game() {
	btnRock.addEventListener('click', () => {
		playRound('rock');
		updateGame();
	});

	btnScissors.addEventListener('click', () => {
		playRound('scissors');
		updateGame();
	});

	btnPaper.addEventListener('click', () => {
		playRound('paper');
		updateGame();
	});
}

function updateGame() {
	userPoints.textContent = `User Points: ${currentUserPoints}`;
	computerPoints.textContent = `Computer Points: ${currentComputerPoints}`;

  if (currentUserPoints == 5) {
    finalResult.textContent = `Congratulations! You won!`;

    currentUserPoints = 0;
		currentComputerPoints = 0;
  }
	else if (currentComputerPoints == 5) {
		finalResult.textContent = "You lost! :("

    currentUserPoints = 0;
		currentComputerPoints = 0;
	}
	container.appendChild(userPoints);
	container.appendChild(computerPoints);
	container.appendChild(finalResult);
}

game();
