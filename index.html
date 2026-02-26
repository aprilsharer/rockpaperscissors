const game = () => {

    // keep track of scores
    let pScore = 0;
    let cScore = 0;

    // start game - fades intro out and match screen in
    const startGame = () => {
        const playBtn = document.querySelector('.intro-button');
        const introScreen = document.querySelector('.intro');
        const matchScreen = document.querySelector('.match');

        playBtn.addEventListener('click', () => {
            introScreen.classList.add('fade-out');
            matchScreen.classList.add('fade-in');
        });
    }

    // play match - handles all gameplay logic
    const playMatch = () => {
        const options = document.querySelectorAll('.options button');
        const playerHand = document.querySelector('.player-hand');
        const computerHand = document.querySelector('.computer-hand');

        // remove animation after it ends so it can play again
        const hands = document.querySelectorAll('.hands img');
        hands.forEach(hand => {
            hand.addEventListener('animationend', function() {
                this.style.animation = '';
            });
        });

        // computer randomly picks rock paper or scissors
        const computerOptions = ['rock', 'paper', 'scissors'];

        options.forEach(option => {
            option.addEventListener('click', function() {

                const computerNumber = Math.floor(Math.random() * 3);
                const computerChoice = computerOptions[computerNumber];

                // play animations
                playerHand.style.animation = 'shake-player 2s ease';
                computerHand.style.animation = 'shake-computer 2s ease';

                // wait for animation to finish then update everything
                setTimeout(() => {
                    // update images
                    playerHand.src = `assets/${this.textContent}.png`;
                    computerHand.src = `assets/${computerChoice}.png`;

                    // compare hands and get result
                    compareHands(this.textContent, computerChoice);
                }, 2000);

            });
        });
    }

    // compare hands and update winner text + score
    const compareHands = (playerChoice, computerChoice) => {
        const winner = document.querySelector('.winner');

        // tie
        if (playerChoice === computerChoice) {
            winner.textContent = "It's a Tie!";
            updateScore();
            return;
        }

        // check for rock
        if (playerChoice === 'rock') {
            if (computerChoice === 'scissors') {
                winner.textContent = 'Player Wins!';
                pScore++;
            } else {
                winner.textContent = 'Computer Wins!';
                cScore++;
            }
            updateScore();
            return;
        }

        // check for paper
        if (playerChoice === 'paper') {
            if (computerChoice === 'scissors') {
                winner.textContent = 'Computer Wins!';
                cScore++;
            } else {
                winner.textContent = 'Player Wins!';
                pScore++;
            }
            updateScore();
            return;
        }

        // check for scissors
        if (playerChoice === 'scissors') {
            if (computerChoice === 'rock') {
                winner.textContent = 'Computer Wins!';
                cScore++;
            } else {
                winner.textContent = 'Player Wins!';
                pScore++;
            }
            updateScore();
            return;
        }
    }

    // update scoreboard on screen
    const updateScore = () => {
        const playerScoreP = document.querySelector('.player-score p');
        const computerScoreP = document.querySelector('.computer-score p');

        playerScoreP.textContent = pScore;
        computerScoreP.textContent = cScore;
    }

    // run all the functions
    startGame();
    playMatch();
}

// kick off the whole game
game();