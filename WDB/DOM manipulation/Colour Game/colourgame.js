var numSquares = 6;
var colours = [];
var pickedColour;
var squares = document.querySelectorAll(".square");
var colourDisplay = document.getElementById("colourDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easy = document.querySelector("#easy");
var hard = document.querySelector("#hard");
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
	setUpModes();
	setUpSquares();
	reset();
}

function setUpModes(){
	//mode button event listeners
	for(var i = 0; i < modeButtons.length; i++){
		modeButtons[i].addEventListener("click", function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent === "Easy" ? numSquares =3: numSquares = 6;
			reset();
		});
	}
}

function setUpSquares(){
	for (var i = 0; i < squares.length; i++){
// add click listeners to squares
		squares[i].addEventListener("click", function(){
			// grab colour of clicked square
			var clickedColour = this.style.backgroundColor;
			// compare colour of pickedColour
			if(clickedColour === pickedColour){
				messageDisplay.textContent = "Correct!";
				resetButton.textContent = "Play Again?"
				changeColours(clickedColour);
				h1.style.backgroundColor = clickedColour;
			} else {
				this.style.backgroundColor ="#232323";
				messageDisplay.textContent = "NOES, GUESS AGAIN!";
			}
		});
	}
}

function reset(){
	// generate new colours
	colours = generateRandomColours(numSquares);
	// pick a new random colours
	pickedColour = pickColour();
	// change colour display to match picked colours
	colourDisplay.textContent = pickedColour;
	resetButton.textContent = "New Colour"

	messageDisplay.textContent = "";
	// change colours of the squares
	for(var i = 0; i < squares.length; i++){
		if(colours[i]){
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colours[i];
		} else {
			squares[i].style.display = "none";
		}
	}
	h1.style.backgroundColor = "steelblue";
}

resetButton.addEventListener("click", function() {
	reset();
})


for (var i = 0; i < squares.length; i++){
	// add click listeners to squares
	squares[i].addEventListener("click", function(){
		// grab colour of clicked square
		var clickedColour = this.style.backgroundColor;
		// compare colour of pickedColour
		if(clickedColour === pickedColour){
			messageDisplay.textContent = "Correct!";
			resetButton.textContent = "Play Again?"
			changeColours(clickedColour);
			h1.style.backgroundColor = clickedColour;
		} else {
			this.style.backgroundColor ="#232323";
			messageDisplay.textContent = "NOES, GUESS AGAIN!";
		}
	});
}

function changeColours(colour){
	// loop through all squares
	for(var i = 0; i < squares.length; i++){
	// change each colour to match given colour
	squares[i].style.backgroundColor = colour;
	}
	
}

function pickColour(){
	var random = Math.floor(Math.random() * colours.length);
	return colours[random];
}

function generateRandomColours(num){
	// array
	var arr = []
	// repeat x times
	for(var i = 0; i < num; i++){
		// get random colour, push into array
		arr.push(randomColour());
	}
	// return array
	return arr;
}

function randomColour(){
	// pick a "red" from 0-255
	var r = Math.floor(Math.random() * 256);
	// pick a "green" from 0-255
	var g = Math.floor(Math.random() * 256);
	// pick a "blue" from 0-255
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}