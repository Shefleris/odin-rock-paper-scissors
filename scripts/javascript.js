/* ==Pseudocode==
    1. Get the human choice
    2. Get the computer choice
    3. Compare the choices. If:
        a. Same choice = show that it's a draw.
        b. Inferior choice = Show that computer wins.
        c. Superior choice = Show that you win.
    4. Increment the winners score
    5. Increment the round number
    6. Repeat steps 1 through 5 until the round number equals 5
    7. Announce the game winner.
*/

function getHumanChoice () {
    return prompt("Choose which one you want to use: Rock, Paper, Scissors"); 
};

function getComputerChoice () {
    let computerChoices = ["rock", "paper", "scissors"];
    return computerChoices[Math.floor(Math.random() * computerChoices.length)];
};

function playRound(humanChoice, computerChoice, humanScore, computerScore) {
    humanChoice = humanChoice.toLowerCase();

    switch (humanChoice){ 
        case "rock":
            if (computerChoice === "rock") {
                console.log("It's a draw!");
            } else if (computerChoice === "paper") {
                console.log("You lose!");
                return computerScore++;
            } else {
                console.log("You win!");
                return humanScore++;
            }
            break;
        case "paper":
            if (computerChoice === "rock") {
                console.log("You won!");
                return humanScore++;
            } else if (computerChoice === "paper") {
                console.log("It's a draw!");
            } else {
                console.log("You lose!");
                return computerScore++;
            }
            break;
        case "scissors":
              if (computerChoice === "rock") {
                console.log("You lose!");
                return computerScore++;
            } else if (computerChoice === "paper") {
                console.log("You win!");
                return humanScore++;
            } else {
                console.log("It's a draw!");
            }
            break;
    };
};

function playGame () {
    let humanScore = 0;
    let computerScore = 0;

    for (let roundNr = 1; roundNr <= 5; roundNr++) {
        console.log("Round nr. " + roundNr);
        playRound(getHumanChoice(),getComputerChoice());
    };

    if (humanScore < computerScore) {
        console.log("You lost the game. Computer Wins! Try again");
    } else if (humanScore === computerScore) {
        console.log("The game was a draw. Try again");
    } else {
        console.log("You won the game. Congratulations!");
    }
};

playGame();