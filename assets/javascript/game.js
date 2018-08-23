

var alphabetArray = ['a', 'b', 'd', 'c', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r','s', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var wins = 0;
var loses = 0;
var guessesRemaining = 10;

    var computerGuess = alphabetArray[Math.floor(Math.random() * alphabetArray.length)];
    console.log(computerGuess);



document.onkeypress = function myFunction(event) {
    var userGuess = event.key.toLowerCase();
    //console.log(userGuess);

    if (userGuess === computerGuess) {
        wins++; 
        computerGuess = alphabetArray[Math.floor(Math.random() * alphabetArray.length)];
        console.log(computerGuess);
        guessesRemaining = 10;
        document.getElementById('letterUsed').innerHTML = ("Letters Guessed: ");
    } 
    else {
        guessesRemaining--;
        document.getElementById('letterUsed').innerHTML = ("Letters Guessed: " + (userGuess + ","));
    }
    if (guessesRemaining === 0) {
        loses++;
        computerGuess = alphabetArray[Math.floor(Math.random() * alphabetArray.length)];
        console.log(computerGuess);
        document.getElementById('letterUsed').innerHTML = ("Letters Guessed: ");

    } else if (guessesRemaining < 0){
        guessesRemaining = 10;
    }

    document.getElementById('wins').innerHTML = ("Wins: " + wins);
    document.getElementById('losses').innerHTML = ("Loses: " + loses);
    document.getElementById('guessesRemaining').innerHTML = ("Guesses Remaining: " + guessesRemaining);

}



