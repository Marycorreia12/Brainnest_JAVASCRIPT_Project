function computerPlay(){
    const GAME_ARRAY = ['rock', 'paper', 'scissors'];
    let random = Math.floor(Math.random() * 3);
    return GAME_ARRAY[random];
}

function playRound(playerSelection, computerSelection){
    let result = '';
    if(playerSelection ===  computerSelection){
        result =  `PlayerSelection: ${playerSelection} \nComputerSelection: ${computerSelection} \nThe game is tied!`;
    }
    else if(playerSelection === 'rock' && computerSelection === 'scissors'){
        result =  `PlayerSelection: ${playerSelection} \nComputerSelection: ${computerSelection} \nYou Win! Rock beats Scissors!`;
        playerScore++;    
    }
    else if(playerSelection === 'paper' && computerSelection === 'rock'){
        result =  `PlayerSelection: ${playerSelection} \nComputerSelection: ${computerSelection} \nYou Win! Paper beats Rock!`;  
        playerScore++;
    }
    else if(playerSelection === 'scissors' && computerSelection === 'paper'){
        result =  `PlayerSelection: ${playerSelection} \nComputerSelection: ${computerSelection} \nYou Win! Scissors beats Paper!`;  
        playerScore++;
    }
    else{
        result =  `PlayerSelection: ${playerSelection} \nComputerSelection: ${computerSelection} \nYou lose computer beats you!`;
        computerScore++;
    }
    return result;
} 
/* const computerSelection = computerPlay(); */
/* console.log(playRound('paper', computerPlay())); */
let computerScore = 0;
let playerScore = 0;

function game(){
    for(let i = 0; i < 5; i++){
        let player = prompt("Enter Rock, Paper or Scissors");
        if(player){
            let playerSelection = player.trim().toLowerCase();
            const computerSelection = computerPlay();
            console.log(playRound(playerSelection, computerSelection));
        }
        else{
            alert('Enter something!')
        }
    }

    if(playerScore > computerScore){
        console.log('You Win!');
    }
    else if(playerScore < computerScore){
        console.log('You lose!');
    }
    else{
        console.log('It\'s a tie');
    }
}

game();