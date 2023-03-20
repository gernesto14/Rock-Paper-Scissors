
// Create a function named getComputerChoice  to randomly return Rock-Paper-Scissors
function getComputerChoice(){
    // Convert computer choice 
    switch (Math.floor(Math.random() * 3) + 1) {
        case 1:
            return 'rock';  
            break;
        case 2:
            return 'paper';
            break;
        case 3:
            return 'scissors';  
            break;    
        default:
            console.log('No computer choice');   
    }
}


// Create function to play single round, should take two parameters, playerSelection 
//and computerSelection, and return the winner

let score; 
function playRound(playerSelection, computerSelection){
    let roundWin = document.getElementById('roundWin');
    
    if(playerSelection === computerSelection)
    roundWin.textContent = 'Game is tie!';
    
        //Rock vs Scissors and Paper
    else if(playerSelection === 'rock'){
        if(computerSelection === 'scissors'){ //Rock win vs Scissors
            roundWin.textContent = "\"You win! Rock beats Scissors\"";
            return score = 1;
        }else{ // Paper wins vs Rock
            roundWin.textContent = "\'You lose! Paper beats Rock\"";
            return score = 0;
        }
    }
    
    //Paper vs Scissors and Rock
    if(playerSelection === 'paper'){
        if (computerSelection === 'scissors'){ //Scissors win vs Paper
            roundWin.textContent = "\"You lose! Scissors beats Paper\"";
            return score = 0;
        }else{ //Paper wins vs Rock
            roundWin.textContent = "'\You win! Paper beats Rock\"";
            return score = 1;
        }
    }
    
    //Scissors vs Paper and Rock
    if(playerSelection === 'scissors'){
        if (computerSelection === 'paper'){ //Scissors win vs Paper
            roundWin.textContent = "\"You win! Scissors beats Paper\"";
            return score = 1;
        }else{ // Rock win vs Scissors
            roundWin.textContent = "\"You lose! Rock beats Scissors\"";
            return score = 0;
        }   
    }
   
}

//Create three buttons
//Add event listener to the button
const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');

rock.addEventListener('click', playerSelection);
paper.addEventListener('click', playerSelection);
scissors.addEventListener('click', playerSelection);


// Create a function named playerSelection and return player choice
let playerChoice = 0;
function playerSelection(event){
    //Get element ID for user input
    playerChoice = this.id;
    game();
    return playerChoice;
}

// loop up to 5 times, display the results of each round and winner at the end
let round = 1;
let computer = 0;
let player = 0;
function game(){
    
    //After 5 round page refreshes and clear values
    if (round === 6)
        location.reload();
    
    playRound(playerChoice, getComputerChoice());
    
    //Count game scores
    if(score === 1)
        player++;
    else if (score === 0)
        computer++;

    //Get elements 
    let humanScore = document.getElementById('humanScore');
    let computerScore = document.getElementById('computerScore');
    let roundNumber = document.getElementById('roundNumber');

    //Update score and round
    humanScore.textContent = player;
    computerScore.textContent = computer;
    roundNumber.textContent = round; 
    
    //Display who wins
    if (round == 5){
        let winner = document.getElementById('winner');
        if(player > computer)
            winner.textContent = 'Human defeat computer!!!';
        else 
            winner.textContent = 'Computer defeated human once again!!!';    
    }
    round += 1; //Increment round by one
       
}


   