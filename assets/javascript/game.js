var alphabetArray = ['a', 'b', 'd', 'c', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r','s', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var computerGuess = alphabetArray[Math.floor(Math.random() * alphabetArray.length)];
console.log(computerGuess);

var wins = 0;
var loses = 0;
var guessesRemaining = 10;
var lettersGuessed = "";

document.onkeyup = function () {
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

    console.log(userGuess);
    if ((userGuess === computerGuess)) {
        alert('You Win!');
        wins++;
    } 
    else {
        guessesRemaining--;
    }

    
    
}
