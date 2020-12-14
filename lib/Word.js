const Letter = require("./Letter")

// Word class takes in a string and produces an array of new Letter objects
class Word {
    constructor(letters) {
        this.letters = letters;
        this.lettersArr = [];
        for (var i = 0; i < letters.length; i++) {
            var newLetter = new Letter(letters[i]);
            this.lettersArr.push(newLetter); 
        };
    };

    // returns a string representing the word. Calls the toString function on each letter object that displays the character or an underscore and concatenate those together.
    displayWord() {
        var string = "";

        for (var i = 0; i < this.lettersArr.length; i++) {
            var char = this.lettersArr[i].toString();
            string += char;
        };

        return string;
    };

    // takes a character as an argument and calls the guess function on each letter object
    guessLetter(char) {

        this.lettersArr.forEach(el => el.guess(char));

        for (var i = 0; i < this.lettersArr.length; i++) {
            if(this.lettersArr[i].guessed === true){
                return true;
            }
        };

        return false;
    };

    // checks to see if every letter has been guessed correctly (user wins)
    guessedCorrectly() {
        for (var i = 0; i < this.lettersArr.length; i++) {
            if (this.lettersArr[i].guessed === false) {
                return false;
            }
        }

        return true;
    };
};

module.exports = Word;