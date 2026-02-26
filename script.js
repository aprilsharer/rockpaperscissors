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
    const playAgainBtn = document.querySelector('.play-again-btn');
    const playerHand = document.querySelector('.player-hand');
    const computerHand = document.querySelector('.computer-hand');
    const playerChoiceText = document.querySelector('.player-choice-text');
    const computerChoiceText = document.querySelector('.computer-choice-text');
    const winner = document.querySelector('.winner');
    const optionsDiv = document.querySelector('.options');

    const computerOptions = ['rock', 'paper', 'scissors'];

    // Play Again button resets the round
    playAgainBtn.addEventListener('click', () => {
      playerHand.classList.remove('show');
      computerHand.classList.remove('show');
      playerChoiceText.textContent = '';
      computerChoiceText.textContent = '';
      winner.textContent = 'Choose an option';
      playAgainBtn.style.display = 'none';
      optionsDiv.style.display = 'flex';
    });

    options.forEach(option => {
      option.addEventListener('click', function() {
        const computerNumber = Math.floor(Math.random() * 3);
        const computerChoice = computerOptions[computerNumber];
        const playerChoice = this.textContent;

        // Hide options while round plays out
        optionsDiv.style.display = 'none';
        playAgainBtn.style.display = 'none';

        // Reset images
        playerHand.classList.remove('show');
        computerHand.classList.remove('show');
        winner.textContent = '...';
        playerChoiceText.textContent = '';
        computerChoiceText.textContent = '';

        // Step 1 — show player choice
        setTimeout(() => {
          playerHand.src = `${playerChoice}.png`;
          playerChoiceText.textContent = playerChoice;
          playerHand.classList.add('show');
        }, 500);

        // Step 2 — show computer choice
        setTimeout(() => {
          computerHand.src = `${computerChoice}.png`;
          computerChoiceText.textContent = computerChoice;
          computerHand.classList.add('show');
        }, 1500);

        // Step 3 — show result and play again button
        setTimeout(() => {
          compareHands(playerChoice, computerChoice);
          updateScore();
          playAgainBtn.style.display = 'block';
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
        winner.textContent = 'You Won!';
        pScore++;
      } else {
        winner.textContent = 'You Lost!';
        cScore++;
      }
      return;
    }

    // Paper
    if (playerChoice === 'paper') {
      if (computerChoice === 'scissors') {
        winner.textContent = 'You Lost!';
        cScore++;
      } else {
        winner.textContent = 'You Won!';
        pScore++;
      }
      return;
    }

    // Scissors
    if (playerChoice === 'scissors') {
      if (computerChoice === 'rock') {
        winner.textContent = 'You Lost!';
        cScore++;
      } else {
        winner.textContent = 'You Won!';
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