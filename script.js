function getComputerChoice(){
    let max = 3;
    let min = 1;
    let numChoice = Math.floor(Math.random() * (max - min + 1)) + min;
    let choice = "";
    if (numChoice === 1){
        choice = "rock";
    } else if (numChoice === 2) {
        choice = "paper";
    } else if (numChoice === 3) {
        choice = "scissor";
    } else {
        console.log("ERROR!");
    }
    return String(choice).toLowerCase();
}

function getHumanChoice(){
    let choice = String(prompt("What's your move?: ")).toLowerCase();
    if ((choice != "rock") && (choice != "paper") && (choice != "scissor")){
        console.log(`Your options are only either "Rock", "Paper" or "Scissor".`);
        return ;
    } else {
        return choice;
    }
}

function playRound(choice, computerChoice){
    if (choice == computerChoice){
        return "NONE";
    } else if (choice == "paper" && computerChoice == "rock"){
        return "HUMAN";
    } else if (choice == "paper" && computerChoice == "scissor"){
        return "COMPUTER";
    } else if (choice == "rock" && computerChoice == "paper"){
        return "COMPUTER";
    } else if (choice == "rock" && computerChoice == "scissor"){
        return "HUMAN";
    } else if (choice == "scissor" && computerChoice == "paper"){
        return "HUMAN";
    } else if (choice == "scissor" && computerChoice == "rock"){
        return "COMPUTER";
    } else {
        return "ERROR";
    }
}

function playGame(rounds){
    let humanScore = 0;
    let computerScore = 0;
    let humanChoice = "";
    let computerChoice = "";
    let winner = "";
    let gameWinner = "";
    while ((humanScore < rounds) && (computerScore < rounds)){
        humanChoice = getHumanChoice();
        while (humanChoice != "rock" && humanChoice != "paper" && humanChoice != "scissor"){
            humanChoice = getHumanChoice();
        }
        computerChoice = getComputerChoice();
        winner = playRound(humanChoice, computerChoice);
        if (winner == "NONE") {
            humanScore += 0;
            computerScore += 0;
            alert(`Human chose: ${humanChoice}`);
            alert(`Computer chose: ${computerChoice}`);
            alert("Draw!");
        } else if (winner == "HUMAN") {
            humanScore += 1;
            alert(`Human chose: ${humanChoice}`);
            alert(`Computer chose: ${computerChoice}`);
            alert("Human wins this round!");
        } else if (winner == "COMPUTER") {
            computerScore += 1;
            alert(`Human chose: ${humanChoice}`);
            alert(`Computer chose: ${computerChoice}`);
            alert("Computer wins this round!");
        } else {
            alert(`Human chose: ${humanChoice}`);
            alert(`Computer chose: ${computerChoice}`);
            alert("ERROR");
            return ;
        }
    }
    if (humanScore > computerScore) {gameWinner = "Human"} else {gameWinner = "Computer"};
    alert(`Computer score: ${computerScore}\nHuman score: ${humanScore}\n"The winner is: " + gameWinner`);
}

function startGame(){
    let rounds = parseInt(prompt("How many points to win?: "));
    while (isNaN(rounds)){
        rounds = parseInt(prompt("How many points to win?: "));
    }
    playGame(rounds);
}

startGame();