//// Array that holds the list of options for the player
var userLetterBank = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
    'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
    't', 'u', 'v', 'w', 'x', 'y', 'z'];

var wins = 0;
var losses = 0;
var guessesLeft = 8;
var yourGuesses = [];

// list of variables that will be taking the place in the html.

var winText = document.getElementById("win-text");
var lossesText = document.getElementById("losses-text");
var guessesLeftText = document.getElementById("guessesLeft-text");
var yourGuessesText = document.getElementById("yourGuesses-text");

// This funtion is run whenever the user presses a key.
document.onkeyup = function (event) {

    // Determines which key was pressed.
    var userGuess = event.key;

    // Randomly chooses a choice from the options array. This is the Computer's guess.
    var winingLetter = userLetterBank[Math.floor(Math.random() * userLetterBank.length)];
    console.log(winingLetter);


    // FUNCTION logic -----------------
    // render function for the render letter.

    //     }
    if (userGuess === winingLetter) {
        wins++;
        yourGuesses = [];
        guessesLeft = 8;
    }

    else {
        (userGuess !== winingLetter) // now i need to work on the guesses left to decrease as the user guess the wrong letter.
        guessesLeft--;
    }


    if (guessesLeft === 0) {
        losses++;
        yourGuesses = [];
        guessesLeft = 8;
    }


    yourGuesses.push(event.key)


    winText.textContent = "win: " + wins;
    lossesText.textContent = "losses: " + losses;
    yourGuessesText.textContent = "your guess: " + yourGuesses;
    guessesLeftText.textContent = "guessesLeft: " + guessesLeft;



}






