function computerPlay(){
    const GAME_ARRAY = ['Rock', 'Paper', 'Scissors'];
    let random = Math.floor(Math.random() * 3);
    return GAME_ARRAY[random];
}
let computerScore = 0;
let playerScore = 0;
let finalResults = document.querySelector('.finalResults');
let results = document.querySelector('.results');
let player1 = document.querySelector('.playerSelection');
let player2 = document.querySelector('.computerSelection');
const ROCK_BTN = document.querySelector('#rock-btn');
const PAPER_BTN = document.querySelector('#paper-btn');
const SCISSORS_BTN = document.querySelector('#scissors-btn');

function playRound(playerSelection, computerSelection){
    let result = '';
    if(playerSelection ===  computerSelection){
        result = 'It\'s a tie 😑!';
    }
    else if(playerSelection === 'Rock' && computerSelection === 'Scissors'){
        result = 'You Win 😀! Rock beats Scissors';
        playerScore++;    
    }
    else if(playerSelection === 'Paper' && computerSelection === 'Rock'){
        result = 'You Win 😀! Paper beats Rock!'; 
        playerScore++;
    }
    else if(playerSelection === 'Scissors' && computerSelection === 'Paper'){
        result = 'You Win 😀! Scissors beats Paper!'; 
        playerScore++;
    }
    else{
        result = `You lose 😫! ${computerSelection} beats ${playerSelection}!`;
        computerScore++;
    }
    return result;
} 

function game(){
    const buttons = document.querySelectorAll('.btn');
        buttons.forEach((button) => {
            button.addEventListener('click', () => {
                const playerSelection = button.value;
                if(playerSelection === 'Rock' || playerSelection === 'Paper' || playerSelection === 'Scissors'){
                    const computerSelection = computerPlay();
                    results.innerHTML = playRound(playerSelection, computerSelection);
                    player1.innerHTML = `You: ${playerScore}`;
                    player2.innerHTML = `Computer: ${computerScore}`; 
                }
                endGame(playerScore, computerScore);                
            });
           
        });   
    }   

game();

function endGame(playerScore, computerScore){
    if(playerScore === 5){
        finalResults.innerHTML = 'GAME OVER*********You Win 😀!';
        finalResults.style.cssText = 'color: #228b22;'
        results.innerHTML = '';
        ROCK_BTN.setAttribute('disabled', 1);
        PAPER_BTN.setAttribute('disabled', 1);
        SCISSORS_BTN.setAttribute('disabled', 1);
    }
    else if(computerScore === 5){
        finalResults.innerHTML = 'GAME OVER*********You lose 😫!';
        finalResults.style.cssText = 'color: #ff0000;'
        results.innerHTML = '';
        ROCK_BTN.setAttribute('disabled', '');
        PAPER_BTN.setAttribute('disabled', '');
        SCISSORS_BTN.setAttribute('disabled', '');
    }
    else{
        finalResults.innerHTML = '';
    } 
}

function playAgain(){
    const playAgain = document.querySelector('.playAgain');
    playAgain.addEventListener('click', () => {
        results.innerHTML = '';
        finalResults.innerHTML = '';
        playerScore = 0;
        computerScore = 0;
        player1.innerHTML = `PlayerSelection: ${playerScore}`;
        player2.innerHTML = `ComputerSelection: ${computerScore}`; 
        ROCK_BTN.removeAttribute('disabled', '');
        PAPER_BTN.removeAttribute('disabled', '');
        SCISSORS_BTN.removeAttribute('disabled', '');
    });
}
playAgain();




