const container = document.querySelector('#container');
const btnContainer = document.querySelector('#btn-container');
const statusContainer = document.querySelector('#status-container');
const player = document.querySelector('#player-score');
const computer = document.querySelector('#computer-score');
const scoreInfo = document.querySelector('#score-info');
const scoreMessage = document.querySelector('#score-message');
const scorePoints = document.querySelector('#score-points');
const playAgain = document.querySelector('#playagain-container');
const endGameInfo = document.querySelector('#endgame-info');

const btnRock = document.createElement('button');
const btnScissors = document.createElement('button');
const btnPaper = document.createElement('button');
const endGameText = document.createElement('div');
const endGameButton = document.createElement('button');

let choices = ["rock", "paper", "scissors"]
let currentUserPoints = 0;
let currentComputerPoints = 0

let images = ["./images/icons8-clenched-fist-96.png", "./images/icons8-hand-scissors-skin-type-2-96.png", "./images/icons8-hand-96.png"];

let btns = [btnRock, btnScissors, btnPaper];

for (let j = 0; j < images.length; j++) {
	btns[j].style.backgroundImage = `url(${images[j]})`;
	btns[j].style.backgroundSize = 'cover';
	btns[j].style.backgroundRepeat = 'no-repeat';
	btns[j].style.border = 'none'; 
	btns[j].style.width = '200px';
	btns[j].style.height = '200px'; 
	btns[j].style.cursor = 'pointer';
	btns[j].style['border-radius'] = '20px';
	btns[j].style.margin = "20px";
}

player.id = "player-score";

computer.id = "computer-score";

function getComputerChoice() {
	return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(getUserChoice) {
	const playerChoice = getUserChoice;
	const computerChoice = getComputerChoice();
	if (playerChoice === computerChoice) {
		scoreInfo.textContent = "It's a tie."; 
		scoreMessage.textContent = `${playerChoice} ties with ${computerChoice}!`;
	}
	else if ((playerChoice === "rock" && computerChoice === "scissors") || (playerChoice === "paper" && computerChoice === "rock") || (playerChoice === "scissors" && computerChoice === "paper")) {
		scoreInfo.textContent = "You win!"; 
		scoreMessage.textContent = `${playerChoice} beats ${computerChoice}!`;
		currentUserPoints += 1;
	} 
	else {
		scoreInfo.textContent = "You lose!";
		scoreMessage.textContent = `${computerChoice} beats ${playerChoice}!`;
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
	let finishedGame = false;
	endGameText.textContent = "";

  if (currentUserPoints == 5) {
    endGameText.textContent = "Congratulations! You won!";

    currentUserPoints = 0;
		currentComputerPoints = 0;
		finishedGame = true;
		scorePoints.appendChild(player);
  }
	else if (currentComputerPoints == 5) {
		endGameText.textContent = "You lost! :("

    currentUserPoints = 0;
		currentComputerPoints = 0;
		finishedGame = true;
		scorePoints.appendChild(computer);
	}
	player.textContent = `Player: ${currentUserPoints}`;
	computer.textContent = `Computer: ${currentComputerPoints}`;

	if (finishedGame) {
		scoreInfo.textContent = "Choose your weapon";
		scoreMessage.textContent = "First to 5 wins the game";
	}
	scorePoints.appendChild(player);
	scorePoints.appendChild(computer);
	endGameInfo.appendChild(endGameText);
}

game();
