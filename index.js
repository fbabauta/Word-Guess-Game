// require modules
const Word = require("./lib/Word");
const randomWords = require("random-words");
const inquirer = require("inquirer");

let newWord;
let remGuesses;

init();

// reset guesses to 10, generate new word, display board, inquire
function init() {
    remGuesses = 10;
    newWord = new Word(randomWords());
    display();
    inquire();
};

// inquirer prompt for guesses
// .then guessLetter & guessCorrectly
// if guessCorrectly game over display you win
// else prompt inquirer again & subtract one from remaining guesses
function inquire() {
    inquirer
        .prompt(
            {
                type: "input",
                name: "userGuess",
                message: "Guess a letter: "
            }
        )
        .then(function(data) {
            let { userGuess } = data;
            newWord.guessLetter(userGuess);
            display();
            if (newWord.guessedCorrectly() === true) {
                console.log("You won!")
                return;
            } else {
                trackGuesses();
            }
        });
};

// keep track of guesses left
function trackGuesses() {
    if (remGuesses > 1) {
        remGuesses -= 1;
        inquire();
    } else {
        console.log(`Game over! You ran out of guesses.\nThe correct answer was ${newWord.letters}.`)
    }
};

// function for displaying guesses and word/underscores to screen
function display() {
    let display = `
    You have ${remGuesses} guesses left. \n\n
    ${newWord.displayWord()}
    `;
    console.log(display);
};

