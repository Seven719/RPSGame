const container = document.querySelector('#container');
const btnContainer = document.querySelector('#btn-container');

const btnRock = document.createElement('button');
const btnScissors = document.createElement('button');
const btnPaper = document.createElement('button');
const player = document.createElement('div');
const computer = document.createElement('div');
const scoreInfo = document.createElement('div');

let choices = ["rock", "paper", "scissors"]
let currentUserPoints = 0;
let currentComputerPoints = 0

let images = ["./images/icons8-hand-scissors-48.png", "./images/icons8-paper-hand-48.png", "./images/icons8-rock-hand-48.png"];

let btns = [btnRock, btnScissors, btnPaper];

btnRock.id = "btn-rock";
for (let j = 0; j < images.length; j++) {
	btns[j].style.backgroundImage = `url(${images[j]})`;
	btns[j].style.backgroundSize = 'cover';
	btns[j].style.backgroundRepeat = 'no-repeat';
	btns[j].style.border = 'none'; 
	btns[j].style.width = '200px';
	btns[j].style.height = '200px'; 
	btns[j].style.cursor = 'pointer';
	btns[j].style['border-radius'] = '20px';
}

btnScissors.id = "btn-scissors"

btnPaper.id = "btn-paper";

player.id = "player-score";

computer.id = "computer-score";

scoreInfo.id = "score-info";

function getComputerChoice() {
	return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(getUserChoice) {
	const playerChoice = getUserChoice;
	const computerChoice = getComputerChoice();
	if ((playerChoice === "rock" && computerChoice === "scissors") || (playerChoice === "paper" && computerChoice === "rock") || (playerChoice === "scissors" && computerChoice === "paper")) {
		console.log(`You win! ${playerChoice} beats ${computerChoice}.`);
		currentUserPoints += 1;
	} 
	else {
		console.log(`You lose! ${computerChoice} beats ${playerChoice}.`);
		currentComputerPoints += 1;
	}	
}

let buttons = [btnRock, btnPaper, btnScissors];

for (let i = 0; i < buttons.length; i++) {
	btnContainer.appendChild(buttons[i]);
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
	player.textContent = `User Points: ${currentUserPoints}`;
	computer.textContent = `Computer Points: ${currentComputerPoints}`;

  if (currentUserPoints == 5) {
    scoreInfo.textContent = "Congratulations! You won!";

    currentUserPoints = 0;
		currentComputerPoints = 0;
  }
	else if (currentComputerPoints == 5) {
		scoreInfo.textContent = "You lost! :("

    currentUserPoints = 0;
		currentComputerPoints = 0;
	}
	container.appendChild(player);
	container.appendChild(computer);
	container.appendChild(scoreInfo);
}

game();
