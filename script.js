const playButton = document.querySelector("#play");
const score = document.querySelector("#score");
const rButton = document.querySelector("#rock");
const pButton = document.querySelector("#paper");
const sButton = document.querySelector("#scissor");
const buttonsContainer = document.querySelector(".buttonsContainer");
const playButtonContainer = document.querySelector(".playButton");
const humanScore = document.querySelector("#humanScore");
const computerScore = document.querySelector("#computerScore");
const restartButton = document.querySelector("#restart");
const computerChoiceDisplay = document.querySelector("#choice");

restartButton.addEventListener("click", () => {
    restartGame();
})

playButton.addEventListener("click", () => {
    buttonsContainer.style.display = "flex";
    playButtonContainer.style.display = "none";
    startGame();
});

rButton.addEventListener("click", () => {
    playRound("rock", getComputerChoice());
});
pButton.addEventListener("click", () => {
    playRound("paper", getComputerChoice());
});
sButton.addEventListener("click", () => {
    playRound("scissor", getComputerChoice());
});

let humanButtonScore = 0;
let computerButtonScore = 0;
let rounds = 0;

function getComputerChoice(){
    let max = 3;
    let min = 1;
    let numChoice = Math.floor(Math.random() * (max - min + 1)) + min;
    let choice = "";
    if (numChoice === 1){
        choice = "rock";
        computerChoiceDisplay.textContent = `Computer chose: ${choice}`;
    } else if (numChoice === 2) {
        choice = "paper";
        computerChoiceDisplay.textContent = `Computer chose: ${choice}`;
    } else if (numChoice === 3) {
        choice = "scissor";
        computerChoiceDisplay.textContent = `Computer chose: ${choice}`;
    } else {
        console.log("ERROR!");
    }
    return String(choice).toLowerCase();
}

function playRound(choice, computerChoice){
    if (choice == computerChoice){
        return "NONE";
    } else if (choice == "paper" && computerChoice == "rock"){
        updateScore("HUMAN");
        return "HUMAN";
    } else if (choice == "paper" && computerChoice == "scissor"){
        updateScore("COMPUTER");
        return "COMPUTER";
    } else if (choice == "rock" && computerChoice == "paper"){
        updateScore("COMPUTER");
        return "COMPUTER";
    } else if (choice == "rock" && computerChoice == "scissor"){
        updateScore("HUMAN");
        return "HUMAN";
    } else if (choice == "scissor" && computerChoice == "paper"){
        updateScore("HUMAN");
        return "HUMAN";
    } else if (choice == "scissor" && computerChoice == "rock"){
        updateScore("COMPUTER");
        return "COMPUTER";
    } else {
        return "ERROR";
    }
}

function updateScore(winner){
    if (winner == "HUMAN") {
        humanButtonScore++;
        humanScore.textContent = `HUMAN: ${humanButtonScore}`;
        if (humanButtonScore == rounds){
            computerChoiceDisplay.textContent = `The Winner is: PLAYER!`;
            buttonsContainer.style.display = "none";
            restartButton.style.display = "block";
        }
    } else if (winner == "COMPUTER") {
        computerButtonScore++;
        computerScore.textContent = `COMPUTER: ${computerButtonScore}`;
        if (computerButtonScore == rounds) {
            computerChoiceDisplay.textContent = `The Winner is: COMPUTER!`;
            buttonsContainer.style.display = "none";
            restartButton.style.display = "block";
        }
    } else if (winner == "RESTART") {
        computerButtonScore = 0;
        humanButtonScore = 0;
        computerScore.textContent = `COMPUTER: ${computerButtonScore}`;
        humanScore.textContent = `HUMAN: ${humanButtonScore}`;
        computerChoiceDisplay.textContent = `SCORE`;
    }
}

function startGame(){
    rounds = parseInt(prompt("How many points to win?: "));
    while (isNaN(rounds)){
        rounds = parseInt(prompt("How many points to win?: "));
    }
}

function restartGame(){
    updateScore("RESTART");
    playButtonContainer.style.display = "flex";
    restartButton.style.display = "none";
}
