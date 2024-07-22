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