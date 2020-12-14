
class Letter {
    constructor(char) {
        this.char = char;
        this.guessed = false;
        this.placeholder = "_ " 
        this.visible = true;
        if (char == "abcdefghijklmnopqrstuvwxyz1234567890") {
            this.visible = false;
        } else {
            this.visible = true;
        }
    };

    // returns the underlying character if the letter has been guessed, or a placeholder(like an underscore) if the letter has not been guessed
    toString() {
        if (this.guessed === true) {
            return this.char;
        } else if (this.guessed === false) {
            return this.placeholder;
        }
    };

    // takes a character as an argument and checks it against the underlying character, updating the stored boolean value to true if it was guessed correctly
    guess(letter) {
        if(letter === this.char) {
            this.guessed = true;
        }

        return this.guessed;
    };

    getSolution() {
        return this.char;
    };
};


module.exports = Letter;