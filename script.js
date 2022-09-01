let array = ['Rock', 'Paper', 'Scissors'];

function computerPlay(){
    const random = array[Math.floor(Math.random() * array.length)]; 
    return random;
}

console.log(computerPlay());

function playRound(playerSelection, computerSelection){
    if(playerSelection == computerSelection){
        return 'The game is tied!';
    }
    else if(playerSelection == 'Rock' && computerSelection == 'Scissors'){
        return 'You Win! Rock beats Scissors!';    
    }
    else if(playerSelection == 'Paper' && computerSelection == 'Rock'){
        return 'You Win! Paper beats Rock!';  
    }
    else if(playerSelection == 'Scissors' && computerSelection == 'Paper'){
        return 'You Win! Scissors beats Paper!';  
    }
    else{
        return 'You lose!'    
    }
}

const computerSelection = computerPlay();
console.log(playRound('Paper', 'Rock'));