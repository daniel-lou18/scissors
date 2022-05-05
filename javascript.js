function computerPlay () {
    const rpc = ['rock', 'paper', 'scissors'];
    let randomNumMaxTwo = Math.floor(Math.random()*3);
    return rpc[randomNumMaxTwo];
}

const score = [0,0];

function checkScore() {
    if (score[0] === 5 || score[1] === 5) {
        if (score[0] === 5) {
            let resultMessage = "You have won 5 rounds in total! You are the overall winner of this game! CONGRATULATIONS!"
            endMessage.textContent = resultMessage;
            return;
        } else if (score[1] === 5) {
            let resultMessage = "The computer has won 5 rounds in total! The computer is the overall winner of this game!"
            endMessage.textContent = resultMessage;
            return;
        }
    }
};

function playRound(playerSelection, computerSelection) {
    let resultMessage;
    if (score[0] < 5 && score[1] < 5) {
        function winRound() {
            message.textContent = resultMessage;
            message.classList.add('update-message');
            score[0] += 1;
            scorePlayer.classList.add('update-score');
        };
        function loseRound() {
            message.textContent = resultMessage;
            message.classList.add('update-message');
            score[1] += 1;
            scoreComputer.classList.add('update-score');
        };
        function drawRound() {
            message.textContent = resultMessage;
            message.classList.add('update-message');
        }
        if (playerSelection === 1 && computerSelection === 'paper') {
            resultMessage = "YOU LOSE! The computer's Paper beats your Rock.";
            loseRound();
        } else if (playerSelection === 1 && computerSelection === 'scissors') {
            resultMessage = "YOU WIN! Your Rock beats the computer's Scissors.";
            winRound();
        } else if (playerSelection === 2 && computerSelection === 'rock') {
            resultMessage = "YOU WIN! Your Paper beats the computer's Rock.";
            winRound();
        } else if (playerSelection === 2 && computerSelection === 'scissors') {
            resultMessage = "YOU LOSE! The computer's Scissors beats your Paper.";
            loseRound();
        } else if (playerSelection === 3 && computerSelection === 'rock') {
            resultMessage = "YOU LOSE! The computer's Rock beats your Scissors.";
            loseRound();
        } else if (playerSelection === 3 && computerSelection === 'paper') {
            resultMessage = "YOU WIN! Your Scissors beats the computer's Paper.";
            winRound();
        } else if (playerSelection === 1 && computerSelection === 'rock') {
            resultMessage = "IT\'S A DRAW! Both you and the computer chose Rock.";
            drawRound();
        } else if (playerSelection === 2 && computerSelection === 'paper') {
            resultMessage = "IT\'S A DRAW! Both you and the computer chose Paper.";
            drawRound();
        } else if (playerSelection === 3 && computerSelection === 'scissors') {
            resultMessage = "IT\'S A DRAW! Both you and the computer chose Scissors."
            drawRound();
        }};
    
    scorePlayer.textContent = score[0];
    scoreComputer.textContent = score[1];
    checkScore();
};

// function game() {
//     const winLose = [0, 0]

//     for (let i = 0; i <= 4; i++) {
//         alert("Please choose 'rock', 'paper' or 'scissors' by clicking on the corresponding button");
//         const computerSelection = computerPlay();
//         const playerSelection = 1;
//         resultMessage2 = playRound(playerSelection, computerSelection);
//         alert(resultMessage2);
//         console.log(resultMessage2);
        
//         if (resultMessage2.charAt(4) === 'W') {
//             winLose[0] += 1;
//         } else if (resultMessage2.charAt(4) === 'L') {
//             winLose[1] += 1;
//         }
//     }
    
//     if (winLose[0] > winLose[1]) {
//         console.log(`You are the overall winner after 5 rounds. You won ${winLose[0]} rounds and lost ${winLose[1]}.`)
//     } else if (winLose[0] < winLose[1]) {
//         console.log(`The computer is the overall winner after 5 rounds. You won ${winLose[0]} rounds and lost ${winLose[1]}.`)
//     } else if (winLose[0] === winLose[1]) {
//         console.log(`IT\'S A DRAW. Both the computer and you won ${winLose[0]} round.`)
//     };

//     return winLose;

// }

const containerOutput = document.createElement('div');
containerOutput.classList.add('container');
containerOutput.style.marginTop = '25px';
document.body.appendChild(containerOutput);

const message = document.createElement('div');
message.classList.add('message');
message.textContent = "Please click on a button to choose ROCK, PAPER or SCISSORS"
containerOutput.appendChild(message);

const scoreboardContainer = document.createElement('div');
scoreboardContainer.style.display = 'flex';
scoreboardContainer.style.justifyContent = 'space-evenly';
scoreboardContainer.style.marginTop = '25px';
containerOutput.appendChild(scoreboardContainer);

const scoreboardLeft = document.createElement('div');
scoreboardContainer.appendChild(scoreboardLeft);

const scoreboardRight = document.createElement('div');
scoreboardContainer.appendChild(scoreboardRight);

const scoreTitlePlayer = document.createElement('div');
scoreTitlePlayer.textContent = "YOUR SCORE";
scoreboardLeft.appendChild(scoreTitlePlayer);

const scoreTitleComputer = document.createElement('div');
scoreTitleComputer.textContent = "SCORE COMPUTER";
scoreboardRight.appendChild(scoreTitleComputer);

const scorePlayer = document.createElement('div');
scorePlayer.classList.add('score', 'num');
scorePlayer.textContent = "0";
scoreboardLeft.appendChild(scorePlayer);

const scoreComputer = document.createElement('div');
scoreComputer.classList.add('score', 'num');
scoreComputer.textContent = "0";
scoreboardRight.appendChild(scoreComputer);

const containerButton = document.createElement('div');
containerButton.classList.add('container');
containerButton.style.display = 'flex';
containerButton.style.justifyContent = 'space-evenly';
containerButton.style.marginTop = '14px';
document.body.appendChild(containerButton);

const button1 = document.createElement('button');
button1.classList.add('button');
button1.setAttribute('id', '1')
button1.textContent = "ROCK"
containerButton.appendChild(button1);

const button2 = document.createElement('button');
button2.classList.add('button');
button2.setAttribute('id', '2');
button2.textContent = "PAPER"
containerButton.appendChild(button2);

const button3 = document.createElement('button');
button3.classList.add('button');
button3.setAttribute('id', '3')
button3.textContent = "SCISSORS"
containerButton.appendChild(button3);

const endMessage = document.createElement('div');
endMessage.classList.add('end');
endMessage.style.textAlign = 'center';
endMessage.style.fontSize = '30px';
endMessage.style.fontWeight = 'bold';
endMessage.style.marginTop = '28px';
document.body.appendChild(endMessage);

function moreRounds(e) {
    const buttonId = Number(e.target.id);
    const clickRound = playRound(buttonId, computerPlay());
};

const buttons = document.querySelectorAll('.button');
buttons.forEach(button => button.addEventListener('click', moreRounds));

function removeTransitionScore(e) {
    if (e.propertyName === 'transform') {
        this.classList.remove('update-score');
    };
}

const scores = document.querySelectorAll('.num');
scores.forEach(score => score.addEventListener('transitionend', removeTransitionScore));

function removeTransitionMessage(e) {
    if (e.propertyName === "transform") {
        this.classList.remove('update-message');
    };
}

message.addEventListener('transitionend', removeTransitionMessage);
