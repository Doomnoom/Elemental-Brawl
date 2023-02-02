const buttons = document.querySelectorAll('.select');
const result = document.querySelector('#result');
const pScore = document.querySelector('#pScore');
const cScore = document.querySelector('#cScore');

let playerScore = 0;
let computerScore = 0;

buttons.forEach(buttons => buttons.addEventListener('click', beginRound))


function beginRound(e){
    let playerSelection = e.currentTarget.id;
    let computerSelection = getComputerSelection();
    result.textContent = determineWinner(playerSelection, computerSelection)
    pScore.textContent = `Player Score: ${playerScore}`
    cScore.textContent = `Computer Score: ${computerScore}`
}

function determineWinner(playerSelection, computerSelection){
    if(playerSelection === computerSelection){
    return 'tie';
    }
    else if(playerSelection === 'water'){
        if(computerSelection === 'fire' || computerSelection === 'metal'){
            playerScore++;
            return 'player';
        }
        else{
            computerScore++;
            return 'computer';
        }
    }
    else if(playerSelection === 'fire'){
        if(computerSelection === 'wood' || computerSelection === 'metal'){
            playerScore++;
            return 'player';
        }
        else{
            computerScore++;
            return 'computer';
        }
    }
    else if(playerSelection === 'metal'){
        if(computerSelection === 'wood' || computerSelection === 'earth'){
            playerScore++;
            return 'player';
        }
        else{
            computerScore++;
            return 'computer';
        }  
    }
    else if(playerSelection === 'wood'){
        if(computerSelection === 'earth' || computerSelection === 'water'){
            playerScore++;
            return 'player';
        }
        else{
            computerScore++;
            return 'computer';
        }   
    }
    else if(playerSelection === 'earth'){
        if(computerSelection === 'fire' || computerSelection === 'water'){
            playerScore++;
            return 'player';
        }
        else{
            computerScore++;
            return 'computer';
        }
    }
}

function getComputerSelection(){
    let computerSelection;
    let roll = Math.floor(Math.random() * 5) +1;

    switch(roll){

        case roll = 1:
            return computerSelection = 'water';
        break;

        case roll = 2:
            return computerSelection = 'fire';
        break;

        case roll = 3:
            return computerSelection = 'metal';
        break;

        case roll = 4:
            return computerSelection = 'wood';
        break;

        case roll = 5:
            return computerSelection = 'earth';
        break;

        default:
            return computerSelection = 'ERROR';
    }
}