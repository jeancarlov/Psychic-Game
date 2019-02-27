//// Array that holds the list of options for the player
// var userChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
// 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
// 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var autoWiningLetter = ['c','h','t','y','j'];
var autoWiningLetterIndex = 0;

/// list of variables that will hold the number of Wins, Losses, Guesses left, and your guesses so far.

var win = 0;
var losses = 0;
var guessesLeft = 0;
var yourGuesses = 9;

// list of variables that will be taking the place in the html.

var $winText = document.getElementById("win-test");
var $lossesText = document.getElementById("losses-test");
var $guessesLeftText = document.getElementById("guessesLeft-test");
var $yourGuessesText = document.getElementById("yourGuesses-test");

// This funtion is run whenever the user presses a key.
document.onkeyup = function(event) {

// Determines which key was pressed.
var userGuess = event.key;

// Randomly chooses a choice from the options array. This is the Computer's guess.
var userChoice = autoWiningLetter[Math.floor(Math.random() * autoWiningLetter.length)];

