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
    const playerChoiceText = document.querySelector('.player-choice-text');
    const computerChoiceText = document.querySelector('.computer-choice-text');
    const winner = document.querySelector('.winner');

    const computerOptions = ['rock', 'paper', 'scissors'];

    options.forEach(option => {
      option.addEventListener('click', function() {
        const computerNumber = Math.floor(Math.random() * 3);
        const computerChoice = computerOptions[computerNumber];
        const playerChoice = this.textContent;

        // Reset everything for new round
        playerHand.classList.remove('show');
        computerHand.classList.remove('show');
        winner.textContent = '...';
        playerChoiceText.textContent = '';
        computerChoiceText.textContent = '';

        // Step 1 — show player choice after short delay
        setTimeout(() => {
          playerHand.src = `${playerChoice}.png`;
          playerChoiceText.textContent = playerChoice;
          playerHand.classList.add('show');
        }, 500);

        // Step 2 — show computer choice after another delay
        setTimeout(() => {
          computerHand.src = `${computerChoice}.png`;
          computerChoiceText.textContent = computerChoice;
          computerHand.classList.add('show');
        }, 1500);

        // Step 3 — show result
        setTimeout(() => {
          compareHands(playerChoice, computerChoice);
          updateScore();
        }, 2500);

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