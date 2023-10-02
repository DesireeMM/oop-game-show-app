/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

const startBtn = document.querySelector('#btn__reset');
startBtn.addEventListener('click', () => {
    resetGame()
    const newGame = new Game();
    newGame.startGame();

    const letterDiv = document.querySelector('#qwerty');
    letterDiv.addEventListener('click', (evt) => {
        const targetBtn = evt.target.closest('button');
        newGame.handleInteraction(targetBtn);
    });

    letterDiv.addEventListener('keyup', (evt) => {
        const letterButtons = document.querySelectorAll('#qwerty button');
        letterButtons.forEach(btn => {
            if (btn.textContent === evt.key) {
                const targetBtn = btn;
                newGame.handleInteraction(targetBtn);
            }
        })
    });
});