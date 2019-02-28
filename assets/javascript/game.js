//// Array that holds the list of options for the player
var userLetterBank = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
't', 'u', 'v', 'w', 'x', 'y', 'z'];

// var autoWiningLetter = ['c','h','t','y','j'];
// var autoWiningLetterIndex = 0;

/// list of variables that will hold the number of Wins, Losses, Guesses left, and your guesses so far.

var wins = 0;
var losses = 0;
var guessesLeft = 0;
var yourGuesses = 9;

// list of variables that will be taking the place in the html.

var winText = document.getElementById("win-text");
var lossesText = document.getElementById("losses-text");
var guessesLeftText = document.getElementById("guessesLeft-text");
var yourGuessesText = document.getElementById("yourGuesses-text");

// This funtion is run whenever the user presses a key.
document.onkeyup = function(event) {

    // Determines which key was pressed.
    var userGuess = event.key;

    // Randomly chooses a choice from the options array. This is the Computer's guess.
    var winingLetter = userLetterBank[Math.floor(Math.random() * userLetterBank.length)];
    console.log(winingLetter);


    // FUNCTION logic -----------------
    // render function for the render letter.

    // option 1

    // function renderLetter(){
    //     if (autoWiningLetterIndex <= (autoWiningLetter.length -1)){
    //         document.querySelector("#win-test").innerHTML = autoWiningLetter[autoWiningLetterIndex];  
    //     }
        if (userGuess === winingLetter){
            wins++;
        } else if ( userGuess !== winingLetter){
            losses++
        }

    winText.textContent = "win:" + wins;
    lossesText.textContent= "losses:" + losses;


    
}






// //  // Display the user and computer guesses, and wins/losses/ties.
// //  userChoiceText.textContent = "You chose: " + userGuess;
// //  computerChoiceText.textContent = "The computer chose: " + computerGuess;
// //  winsText.textContent = "wins: " + wins;
// //  lossesText.textContent = "losses: " + losses;
// //  tiesText.textContent = "ties: " + ties;
// }