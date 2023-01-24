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
            return computerSelection = 'error';
    }
}