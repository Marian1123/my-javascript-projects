let score = JSON.parse(localStorage.getItem('score')) || {
wins: 0,
losses: 0,
ties: 0
};

showScoreElement();

document.querySelector('.js-rock-button').addEventListener('click', () => {
  playGame('rock');
});

document.querySelector('.js-paper-button').addEventListener('click', () => {
  playGame('paper');
});

document.querySelector('.js-scissors-button').addEventListener('click', () => {
  playGame('scissors');
});

document.querySelector('.js-reset-score-button').addEventListener('click', () => {
  showConfirmationMessage();
});

document.querySelector('.js-auto-play-button').addEventListener('click', () => {
  autoPlay();
});

document.body.addEventListener('keydown', (event) => {
  if (event.key === 'r') {
    playGame('rock');
  } else if (event.key === 'p') {
    playGame('paper');
  } else if (event.key === 's') {
    playGame('scissors');
  } else if (event.key === 'a') {
    autoPlay();
  } else if (event.key === 'Backspace') {

  }
});

function playGame(playerMove) {
  const computerMove = pickComputerMove();

  let result = '';

  if (playerMove === 'rock') {
    if (computerMove === 'rock') {
      result = 'Tie.';
    } else if (computerMove === 'paper') {
      result = 'You lose.';
    } else if (computerMove === 'scissors') {
      result = 'You win.';
    }
  } else if (playerMove === 'paper') {
    if (computerMove === 'rock') {
      result = 'You win.';
    } else if (computerMove === 'paper') {
      result = 'Tie.';
    } else if (computerMove === 'scissors') {
      result = 'You lose.';
    } 
  } else if (playerMove === 'scissors') {
    if (computerMove === 'rock') {
      result = 'You lose.';
    } else if (computerMove === 'paper') {
      result = 'You win.';
    } else if (computerMove === 'scissors') {
      result = 'Tie.';
    }
  }

  document.querySelector('.js-result').innerHTML = result;

  document.querySelector('.js-moves').innerHTML = `You <img class="move-icon" src="images/${playerMove}-emoji.png"> <img class="move-icon" src="images/${computerMove}-emoji.png"> Computer`;

  if (result === 'You win.') {
    score.wins++;
  } else if (result === 'You lose.') {
    score.losses++;
  } else if (result === 'Tie.') {
    score.ties++;
  }

  localStorage.setItem('score', JSON.stringify(score));

  showScoreElement();
}

function pickComputerMove() {
  const randomNumber = Math.random();

  let computerMove = '';

  if (randomNumber >= 0 && randomNumber < 1 / 3) {
    computerMove = 'rock';
  } else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
    computerMove = 'paper';
  } else if (randomNumber >= 2 / 3 && randomNumber < 1) {
    computerMove = 'scissors';
  }

  return computerMove;
}

function resetScore() {
  score.wins = 0;
  score.losses = 0;
  score.ties = 0;
  showScoreElement();
  localStorage.removeItem('score');
}

function showScoreElement() {
  document.querySelector('.js-score').innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}

isAutoPlaying = false;
let intervalId;

function autoPlay() {
  if (!isAutoPlaying) {
    intervalId = setInterval(() => {
      const playerMove = pickComputerMove();
      playGame(playerMove);
     }, 1000);
     isAutoPlaying = true;
     document.querySelector('.js-auto-play-button').innerHTML = 'Stop playing';
  } else {
    isAutoPlaying = false;
    clearInterval(intervalId);
    document.querySelector('.js-auto-play-button').innerHTML = 'Auto Play';
  }
}

function showConfirmationMessage() {
  document.querySelector('.js-confirmation-message').innerHTML = `Are you sure you want to reset the score?<button class="js-yes-button confirmation-button">Yes</button><button class="js-no-button confirmation-button">No</button>`;

  document.querySelector('.js-yes-button').addEventListener('click', () => {
   resetScore();
   hideConfirmationMessage();
  });

  document.querySelector('.js-no-button').addEventListener('click', () => {
    hideConfirmationMessage();
   });
}

function hideConfirmationMessage() {
  document.querySelector('.js-confirmation-message').innerHTML = '';
}