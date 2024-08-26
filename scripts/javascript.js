// Game
let humanScore = 0;
let computerScore = 0;
let roundNr = 1;

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        displayResult("draw");
    } else if (humanChoice == "rock" && computerChoice == "paper") {
        displayResult("lost");
        computerScore++;
    } else if (humanChoice == "rock" && computerChoice == "scissors") {
        displayResult("win");
        humanScore++;
    }  else if (humanChoice == "paper" && computerChoice == "scissors") {
        displayResult("lost");
        computerScore++;
    } else if (humanChoice == "paper" && computerChoice == "rock") {
        displayResult("win");
        humanScore++;
    } else if (humanChoice == "scissors" && computerChoice == "paper") {
        displayResult("win");
        humanScore++;
    } else if (humanChoice == "scissors" && computerChoice == "rock") {
        displayResult("lost");
        computerScore++;
    } else {
        return console.log("error");
    };
    
    updateScore();
    updateRoundNr();
    checkForGameEnd();
};

function getComputerChoice () {
    let computerChoices = ["rock", "paper", "scissors"];
    return computerChoices[Math.floor(Math.random() * computerChoices.length)];
};

function checkForGameEnd () {
    if (humanScore == 5 || computerScore == 5)
        toggleChoiceBtn();
        finalScoreMsg();
};

function restartGame () {
    humanScore = 0;
    computerScore = 0;
    roundNr = 1;
    toggleChoiceButtons();
};

//  UI
const choice = document.querySelector("#choice-menu");

choice.addEventListener('click', (event) => {
    let humanChoice = event.target.id;
    playRound(humanChoice, getComputerChoice());
});

function displayResult (result) {
    const createResult =  document.querySelector("#result");
    if (result === "draw") {
        createResult.textContent = "It's a draw!";
    } else {
        createResult.textContent = "You " + result + "!";
    }
};

function updateScore() {
    const scoreCountText = document.querySelector(".score-count");
    scoreCountText.textContent = "Score: " + humanScore + ":" + computerScore;
};

function updateRoundNr () {
    roundNr++;
    const roundNrText = document.querySelector(".round-nr");
    roundNrText.textContent = "Round Nr. " + roundNr;
};

function finalScoreMsg () {
    const createResult =  document.querySelector("#result");
    if (humanScore < computerScore) {
        createResult.textContent = "You lost the game. Computer Wins! Try again!";
        console.log("You lost the game. Computer Wins! Try again");
    } else {
        createResult.textContent = "You won the game. Congratulations!";
        console.log("You won the game. Congratulations!");
    };
};

function restartGame () {
    humanScore = 0;
    computerScore = 0;
    roundNr = 1;
    toggleChoiceButtons();
};

function toggleChoiceBtn () {
    const rockBtn = document.getElementById("rock");
    const paperBtn = document.getElementById("paper");
    const scissorsBtn = document.getElementById("scissors");

    if (rockBtn.disabled == false || paperBtn.disabled == false || scissorsBtn.disabled == false ) {
        rockBtn.disabled = true;
        paperBtn.disabled = true;
        scissorsBtn.disabled = true;
    } else {
        rockBtn.disabled = false;
        paperBtn.disabled = false;
        scissorsBtn.disabled = false;
    };
};