/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
    constructor(missed, phrases, activePhrase = null) {
        this.missed = missed;
        this.phrases = phrases;
        this.activePhrase = activePhrase
    }

    startGame() {
        // hides start screen overlay
        const startScreen = document.querySelector('#overlay');
        startScreen.classList.remove('show');
        startScreen.classList.add('hide');
        // calls getRandomPhrase()
        const randomPhrase = this.getRandomPhrase(this.phrases);
        // sets activePhrase
        this.activePhrase = randomPhrase;
        // displays activePhrase with addPhraseToDisplay()
        this.addPhraseToDisplay(activePhrase);
    }

    getRandomPhrase() {
        // randomly retrieves one of the phrases in this.phrases
        const randomNumber = Math.floor(Math.random * this.phrases.length);
        return this.phrases[randomNumber];
    }

    handleInteraction() {
        // takes user button click
        const letterDiv = document.querySelector('#qwerty');
        letterDiv.addEventListener('click', (evt) => {
            const targetBtn = evt.target.closest('button');
            const playerGuess = targetBtn.textContent;
            this.activePhrase.checkLetter(playerGuess);
            if (!checkLetter) {
                targetBtn.classList.add('wrong');
                this.removeLife();
            } else {
                targetBtn.classList.add('chosen');
                this.activePhrase.showMatchedLetter(playerGuess);
                if (this.checkForWin()) {
                    this.gameOver()
                }
            }
        });
    }

    removeLife() {
        const scoreboard = document.querySelector('#scoreboard');
        const lives = scoreboard.querySelectorAll('li');
        lives.forEach((liveLI, index) => {
            if (index < this.missed) {
                liveLI.src = 'images/lostHeart.png';
            }
            this.missed += 1;
        })
        if (this.missed >= 5) {
            this.gameOver();
        }
    }

    checkForWin() {
        // check if all letters are revealed
        const phraseDiv = document.querySelector('#phrase')
        allChars = phraseDiv.querySelectorAll('li');
        allChars.forEach(charLI => {
            if (charLI.classList.includes('hide')) {
                return false;
            }
            return true;
        });

    }

    gameOver() {
        // displays original start screen overlay
        startScreen.classList.add('show');
        startScreen.classList.remove('hide');
        const overlayH1 = document.querySelector('#game-over-message');
        if (checkForWin) {
            overlayH1.innerText = 'Congratulations, you won!';
            overlayH1.classList.add('win');
        } else {
            overlayH1.innerText = 'Oh no, you lost. Try again!'
            overlayH1.classList.add('lose');
        }
    }
}