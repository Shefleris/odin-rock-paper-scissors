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

console.log(getHumanChoice());

function getComputerChoice () {
    let computerChoices = ["rock", "paper", "scissors"];
    return computerChoices[Math.floor(Math.random() * computerChoices.length)];
};

console.log(getComputerChoice());

function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();

    switch (humanChoice){ 
        case "rock":
            if (computerChoice === "rock") {
                console.log("It's a draw!");
            } else if (computerChoice === "paper") {
                console.log("You lose!");
            } else {
                console.log("You win!");
            }
            break;
        case "paper":
            if (computerChoice === "rock") {
                console.log("You won!");
            } else if (computerChoice === "paper") {
                console.log("It's a draw!");
            } else {
                console.log("You lose!");
            }
            break;
        case "scissors":
              if (computerChoice === "rock") {
                console.log("You lose!");
            } else if (computerChoice === "paper") {
                console.log("You win!");
            } else {
                console.log("It's a draw!");
            }
            break;
    };
};

playRound(getHumanChoice(), getComputerChoice());