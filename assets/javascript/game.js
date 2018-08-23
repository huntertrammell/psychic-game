var alphabetArray = ['a', 'b', 'd', 'c', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r','s', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var wins = 0;
var loses = 0;
var guessesRemaining = 10;
var computerGuess = alphabetArray[Math.floor(Math.random() * alphabetArray.length)];
console.log(computerGuess);

document.onkeypress = function myFunction(event) {
    var userGuess = event.key;
    console.log(userGuess);

    if (userGuess === computerGuess) {
        wins++; 
    } 
    else {
        guessesRemaining--;
    }
    if (guessesRemaining === 0) {
        loses++;
    } else if (guessesRemaining < 0){
        guessesRemaining = 10;
    }
    document.getElementById('wins').innerHTML = ("Wins: " + wins);
    document.getElementById('losses').innerHTML = ("Loses: " + loses);
    document.getElementById('guessesRemaining').innerHTML = ("Guesses Remaining: " + guessesRemaining);
}


//document.getElementById('letterUsed').innerHTML = ("Letters Guessed: " + lettersGuessed);

