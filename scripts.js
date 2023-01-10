
// // Game Pseudocode:  
// . Generate random number for computer
// . Get user input 
// . Change user input to lowercase 
// . Match computer int to string using SWITCH CASE    
// . Play round using IF statement 
// -----'Rock’, ‘Paper’ or ‘Scissors’-----

const computerSelection = getComputerChoice();
const playerSelection = convertPlayerInput(); 

function getComputerChoice(){
    return  Math.floor(Math.random() * 3) + 1;
}

function getPlayerInput(){
    return prompt("'Rock’, ‘Paper’ or ‘Scissors’: ").toLowerCase();
}

function convertPlayerInput(){
    switch (getPlayerInput()) {
        case 'rock':
            return 1;
        case 'paper':
            return 2;
        case 'scissors':
            return 3;
        default:
            break;
    }
}

function playRound(playerSelection,computerSelection){
    if(playerSelection === computerSelection) // Tie Game
        console.log('Game is tie!');
    else if((playerSelection === 1) && (computerSelection === 3)) //Rock vs Scissors
        console.log("You win! Rock beats Scissors");
    else if ((playerSelection === 2) && (computerSelection === 1)) // Paper vs Rock
        console.log("You win! Paper beats Rock");
    else if ((playerSelection === 3) && (computerSelection == 2)) // Scissors vs Paper
        console.log("You win! Scissors beats Paper");
    else if((playerSelection === 3) && (computerSelection === 1)) //Scissors vs Rock
        console.log("You lose! Rock beats Scissors");
    else if ((playerSelection === 1) && (computerSelection === 2)) // Rock vs Paper
        console.log("You lose! Paper beats Rock");
    else if ((playerSelection === 2) && (computerSelection == 3)) // Paper vs Scissors
        console.log("You lose! Scissors beats Paper");
}

playRound(playerSelection,computerSelection);





