function computerPlay () {
    const rpc = ['rock', 'paper', 'scissors'];
    let randomNumMaxTwo = Math.floor(Math.random()*3);
    return rpc[randomNumMaxTwo];
}

function playRound(playerSelection, computerSelection) {
    let result;    
    if (playerSelection.toLowerCase() === 'rock' && computerSelection === 'paper') {
        result = "You Lose! Paper beats Rock.";
        return result;
    } else if (playerSelection.toLowerCase() === 'rock' && computerSelection === 'scissors') {
        result = "You Win! Rock beats Scissors.";
        return result;
    } else if (playerSelection.toLowerCase() === 'paper' && computerSelection === 'rock') {
        result = "You Win! Paper beats Rock.";
        return result;
    } else if (playerSelection.toLowerCase() === 'paper' && computerSelection === 'scissors') {
        result = "You Lose! Scissors beats Paper.";
        return result;
    } else if (playerSelection.toLowerCase() === 'scissors' && computerSelection === 'rock') {
        result = "You Lose! Rock beats Scissors.";
        return result;
    } else if (playerSelection.toLowerCase() === 'scissors' && computerSelection === 'paper') {
        result = "You Win! Scissors beats Paper.";
        return result;
    } else if (playerSelection.toLowerCase() === 'rock' && computerSelection === 'rock') {
        result = "It\'s a draw! Both you and the computer chose Rock.";
        return result;
    } else if (playerSelection.toLowerCase() === 'paper' && computerSelection === 'paper') {
        result = "It\'s a draw! Both you and the computer chose Paper.";
        return result;
    } else if (playerSelection.toLowerCase() === 'scissors' && computerSelection === 'scissors') {
        result = "It\'s a draw! Both you and the computer chose Scissors.";
        return result;
    } else {
        result = "Please choose between 'rock', 'paper' and 'scissors'";
        return result;
    }
}


function game() {
    const winLose = [0, 0]

    for (let i = 0; i <= 4; i++) {
        const playerSelection = window.prompt("Please enter 'rock', 'paper' or 'scissors'");
        const computerSelection = computerPlay();
        result2 = playRound(playerSelection, computerSelection);
        alert(result2);
        console.log(result2);
        
        if (result2.charAt(4) === 'W') {
            winLose[0] += 1;
        } else if (result2.charAt(4) === 'L') {
            winLose[1] += 1;
        }
    }
    return winLose;
}

console.log(game())

