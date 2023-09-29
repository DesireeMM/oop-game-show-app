/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
    constructor (phrase) {
        this.phrase = phrase;
    }

    addPhraseToDisplay() {
        const displayDiv = document.querySelector('#phrase');
        let phraseHTML = '';
        const phraseArray = this.phrase.split();
        phraseArray.forEach(char => {
            if (char !== " ") {
                // add letter to phraseHTML
                phraseHTML += `<li class="hide letter ${char}">${char}</li>`
            } else {
                // add space to phraseHTML
                phraseHTML += `<li class="space"> </li>`
            }
        });
        displayDiv.firstChild.insertAdjacentHTML('beforeend', phraseHTML);
    }

    checkLetter(char) {
        // check if letter is included in phraseArray
        const phraseArray = this.phrase.split();
        if (phraseArray.includes(char)) {
            return true;
        }
        return false;
    }

    showMatchedLetter(char) {
        // reveal the letter(s) that match the playerGuess
        const allMatchingChars = document.querySelector(`.${char}`);
        allMatchingChars.forEach(charLI => {
            charLI.classList.remove('hide');
            charLI.classList.add('show');
        });
    }
}