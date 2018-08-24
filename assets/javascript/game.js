

var alphabetArray = ['a', 'b', 'd', 'c', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r','s', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var wins = 0;
var loses = 0;
var guessesRemaining = 10;
var guessedLetters = [];
    var computerGuess = alphabetArray[Math.floor(Math.random() * alphabetArray.length)];
    console.log(computerGuess);

document.onkeypress = function myFunction(event) {
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
    guessedLetters.push(userGuess);
    //console.log(userGuess);

    if (userGuess === computerGuess) {
        wins++; 
        computerGuess = alphabetArray[Math.floor(Math.random() * alphabetArray.length)];
        console.log(computerGuess);
        guessesRemaining = 10;
        document.getElementById('letterUsed').innerHTML = ("Letters Guessed: ");
    } else if (guessedLetters[""] == String.fromCharCode(event.keyCode).toLowerCase()) {
        alert("You have already guessed this");
    }
    else {
        guessesRemaining--;
        document.getElementById('letterUsed').innerHTML = ("Letters Guessed: " + guessedLetters.join(" ,"));
        guessedLetters.join(', ');
    }
    if (guessesRemaining === 0) {
        loses++;
        computerGuess = alphabetArray[Math.floor(Math.random() * alphabetArray.length)];
        console.log(computerGuess);
        document.getElementById('letterUsed').innerHTML = ("Letters Guessed: ");
        guessesRemaining = 10;
        guessedLetters = [];

    } else if (guessesRemaining < 0){
        guessesRemaining = 10;
        guessedLetters = [];
    }

    document.getElementById('wins').innerHTML = ("Wins: " + wins);
    document.getElementById('losses').innerHTML = ("Loses: " + loses);
    document.getElementById('guessesRemaining').innerHTML = ("Guesses Remaining: " + guessesRemaining);

}



