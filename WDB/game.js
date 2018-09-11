var secretNumber = 4;

var stringGuess = (prompt("Guess a number!"))
var guess = Number(stringGuess);


if(Number(guess) === secretNumber) {
	alert("You got it correct!");
}

else if(Number(guess) > secretNumber) {
	alert("Guess lower!");
}

else {
	alert("Guess higher!");
}