/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

const resetGame = () => {
    const displayDivUL = document.querySelector('#phrase ul');
    displayDivUL.innerHTML = '';
    const keyboardLetters = document.querySelectorAll('.key');
    keyboardLetters.forEach(key => {
        key.classList.remove('wrong');
        key.classList.remove('chosen');
    })
    const lives = document.querySelectorAll('.tries');
    lives.forEach(lifeLI => {
        const heartIMG = lifeLI.firstChild;
        heartIMG.src = 'images/liveHeart.png';
    })
};

class Game {
    constructor() {
        this.missed = 0;
        this.phrases = [
            new Phrase("javascript is fun"),
            new Phrase("lifelong learner"),
            new Phrase("treehouse"),
            new Phrase("anita b"),
            new Phrase("apprenticeship pathway program")
        ];
        this.activePhrase = null;
    }

    startGame() {
        // hides start screen overlay
        const startScreen = document.querySelector('#overlay');
        startScreen.classList.remove('show');
        startScreen.style.display = 'none';
        // calls getRandomPhrase()
        const randomPhrase = this.getRandomPhrase();
        // sets activePhrase
        this.activePhrase = randomPhrase;
        // displays activePhrase with addPhraseToDisplay()
        this.activePhrase.addPhraseToDisplay();
    }

    getRandomPhrase() {
        // randomly retrieves one of the phrases in this.phrases
        const randomNumber = Math.floor(Math.random() * this.phrases.length);
        return this.phrases[randomNumber];
    }

    handleInteraction(targetBtn) {
        // retrieves guessed letter
        const playerGuess = targetBtn.textContent;
        // handles guess
        const checkLetter = this.activePhrase.checkLetter(playerGuess);
        if (!checkLetter) {
            targetBtn.classList.add('wrong');
            this.removeLife();
        } else {
            targetBtn.classList.add('chosen');
            this.activePhrase.showMatchedLetter(playerGuess);
            const winCheck = this.checkForWin();
            if (winCheck) {
                this.gameOver(winCheck)
            }
        }
    }

    removeLife() {
        // increments the missed property and
        // updates lives display
        this.missed += 1;
        const lives = document.querySelectorAll('.tries');
        lives.forEach((liveLI, index) => {
            if (index < this.missed) {
                const heartIMG = liveLI.firstChild
                heartIMG.src = 'images/lostHeart.png';
            }
        })
        if (this.missed >= 5) {
            this.gameOver();
        }
    }

    checkForWin() {
        // check if all letters are revealed
        const phraseDiv = document.querySelector('#phrase')
        const allChars = phraseDiv.querySelectorAll('li');
        for (let i = 0; i < allChars.length; i++) {
            if (allChars[i].classList.contains('hide')) {
                return false
            }
        }
        return true
    }

    gameOver(winCheck) {
        // displays original start screen overlay
        const startScreen = document.querySelector('#overlay')
        startScreen.style.display = 'block';
        const overlayH1 = document.querySelector('#game-over-message');
        if (winCheck) {
            overlayH1.innerText = 'Congratulations, you won!';
            startScreen.classList.add('win');
            startScreen.classList.remove('lose');
        } else {
            overlayH1.innerText = 'Oh no, you lost. Try again!'
            startScreen.classList.add('lose');
            startScreen.classList.remove('win');
        }
    }
}