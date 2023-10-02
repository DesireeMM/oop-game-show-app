/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

// declare a newGame variable for later use
let newGame;
// select the reset button and add an event listener
// resets and starts new games
const startBtn = document.querySelector('#btn__reset');
startBtn.addEventListener('click', () => {
    resetGame()
    newGame = new Game();
    newGame.startGame();
});

// handle user interaction
const letterDiv = document.querySelector('#qwerty');
letterDiv.addEventListener('click', (evt) => {
    if (evt.target.matches('button')) {
        const targetBtn = evt.target;
        newGame.handleInteraction(targetBtn)
    }
});

document.addEventListener('keyup', (evt) => {
    const letterButtons = document.querySelectorAll('#qwerty button');
    letterButtons.forEach(btn => {
        if (btn.textContent === evt.key) {
            const targetBtn = btn;
            newGame.handleInteraction(targetBtn);
        }
    })
});