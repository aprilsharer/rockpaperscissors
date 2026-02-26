const game = () => {

  let pScore = 0;
  let cScore = 0;

  // Start Game
  const startGame = () => {
    const playButton = document.querySelector('.intro button');
    const introScreen = document.querySelector('.intro');
    const matchScreen = document.querySelector('.match');

    playButton.addEventListener('click', () => {
      introScreen.classList.add('fade-out');
      matchScreen.classList.add('fade-in');
    });
  };

  // Play Match
  const playMatch = () => {
    const options = document.querySelectorAll('.options button');
    const playerHand = document.querySelector('.player-hand');
    const computerHand = document.querySelector('.computer-hand');

    const computerOptions = ['rock', 'paper', 'scissors'];

    const hands = document.querySelectorAll('.hands img');
    hands.forEach(hand => {
      hand.addEventListener('animationend', function() {
        this.style.animation = '';
      });
    });

    options.forEach(option => {
      option.addEventListener('click', function() {
        const computerNumber = Math.floor(Math.random() * 3);
        const computerChoice = computerOptions[computerNumber];
        const playerChoice = this.textContent;

        // Animate hands
        playerHand.style.animation = 'shakePlayer 2s ease';
        computerHand.style.animation = 'shakeComputer 2s ease';

        // Delay updates until animation finishes
        setTimeout(() => {
          // Update images
          playerHand.src = `assets/${playerChoice}.png`;
          computerHand.src = `assets/${computerChoice}.png`;

          // Compare and update score
          compareHands(playerChoice, computerChoice);
          updateScore();
        }, 2000);
      });
    });
  };

  // Compare Hands
  const compareHands = (playerChoice, computerChoice) => {
    const winner = document.querySelector('.winner');

    // Tie
    if (playerChoice === computerChoice) {
      winner.textContent = "It's a tie!";
      return;
    }

    // Rock
    if (playerChoice === 'rock') {
      if (computerChoice === 'scissors') {
        winner.textContent = 'Player wins!';
        pScore++;
      } else {
        winner.textContent = 'Computer wins!';
        cScore++;
      }
      return;
    }

    // Paper
    if (playerChoice === 'paper') {
      if (computerChoice === 'scissors') {
        winner.textContent = 'Computer wins!';
        cScore++;
      } else {
        winner.textContent = 'Player wins!';
        pScore++;
      }
      return;
    }

    // Scissors
    if (playerChoice === 'scissors') {
      if (computerChoice === 'rock') {
        winner.textContent = 'Computer wins!';
        cScore++;
      } else {
        winner.textContent = 'Player wins!';
        pScore++;
      }
      return;
    }
  };

  // Update Score
  const updateScore = () => {
    const playerScoreEl = document.querySelector('.player-score p');
    const computerScoreEl = document.querySelector('.computer-score p');
    playerScoreEl.textContent = pScore;
    computerScoreEl.textContent = cScore;
  };

  startGame();
  playMatch();
};

game();