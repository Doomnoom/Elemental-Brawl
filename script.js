
function round(){
    let result;
    let playerSelection = prompt('Select element from the chart:');
    playerSelection = playerSelection.toUpperCase();
    let computerSelection = getComputerSelection();

    if(playerSelection === computerSelection){
        result = 'It\'s a draw!';
    }
    else if(playerSelection === 'WATER'){
        if(computerSelection === 'FIRE' || computerSelection === 'METAL'){
            result = 'Victorious!';
        }
        else{
            result = 'Defeat!';
        }
    }
    else if(playerSelection === 'FIRE'){
        if(computerSelection === 'WOOD' || computerSelection === 'METAL'){
            result = 'Victorious!';
        }
        else{
            result = 'Defeat!';
        }
    }
    else if(playerSelection === 'METAL'){
        if(computerSelection === 'WOOD' || computerSelection === 'EARTH'){
            result = 'Victorious!';
        }
        else{
            result = 'Defeat!';
        }  
    }
    else if(playerSelection === 'WOOD'){
        if(computerSelection === 'EARTH' || computerSelection === 'WATER'){
            result = 'Victorious!';
        }
        else{
            result = 'Defeat!';
        }   
    }
    else if(playerSelection === 'EARTH'){
        if(computerSelection === 'FIRE' || computerSelection === 'WATER'){
            result = 'Victorious!';
        }
        else{
            result = 'Defeat!';
        }
    }

    console.log('PC CHOICE: ' + computerSelection)
    console.log(result);
}

function getComputerSelection(){
    let computerSelection;
    let roll = Math.floor(Math.random() * 5) +1;

    switch(roll){

        case roll = 1:
            return computerSelection = 'WATER';
        break;

        case roll = 2:
            return computerSelection = 'FIRE';
        break;

        case roll = 3:
            return computerSelection = 'METAL';
        break;

        case roll = 4:
            return computerSelection = 'WOOD';
        break;

        case roll = 5:
            return computerSelection = 'EARTH';
        break;

        default:
            return computerSelection = 'ERROR';
    }
}