
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
    
    if(playerSelection === computerSelection)
        console.log('Game is tie!')
    
        //Rock vs Scissors and Paper
    else if(playerSelection === 'rock'){
        if(computerSelection === 'scissors'){ //Rock win vs Scissors
            console.log("\"You win! Rock beats Scissors\"")
            return score = 1;
        }else{ // Paper wins vs Rock
            console.log("\'You lose! Paper beats Rock\"");
            return score = 0;
        }
    }
    
    //Paper vs Scissors and Rock
    if(playerSelection === 'paper'){
        if (computerSelection === 'scissors'){ //Scissors win vs Paper
            console.log("\"You lose! Scissors beats Paper\"");
            return score = 0;
        }else{ //Paper wins vs Rock
            console.log("'\You win! Paper beats Rock\"");
            return score = 1;
        }
    }
    
    //Scissors vs Paper and Rock
    if(playerSelection === 'scissors'){
        if (computerSelection === 'paper'){ //Scissors win vs Paper
            console.log("\"You win! Scissors beats Paper\"");
            return score = 1;
        }else{ // Rock win vs Scissors
            console.log("\"You lose! Rock beats Scissors\"");
            return score = 0;
        }   
    }
   
}


// Create a function named playerSelection, case sensitive rock RocK ROCK, return input
function playerSelection(){
    var userInput = '';
    var arr = ['rock', 'paper', 'scissors'];
    
    //Create input form user using prompt() method
    while(!arr.includes(userInput)){ //Loop check for correct input
        userInput = prompt('\"Rock,\" \"Paper\", \"Scissors\" :');
        userInput = userInput.toLowerCase();
    }
    return userInput
}

// Create function named game() using while/for loop up to 5 times, display the results
//of each round and winner at the end

function game(){
    
    let computer = 0;
    let player = 0;

    for( i = 1; i < 6; i++){
        playRound(playerSelection(), getComputerChoice());
        
        //Count game scores
        if(score === 1)
            player++;
        else if (score === 0)
            computer++;

        console.log('Human player score of: ' + player);
        console.log('Computer score of: ' + computer);
        console.log('Round: ' + i);

        //Display who wins
        if (i == 5){
            if(player > computer)
                console.log('Human defeat computer!!!');
            else 
                console.log('Computer defeated human once again!!!');

        }

    }
}


game();









