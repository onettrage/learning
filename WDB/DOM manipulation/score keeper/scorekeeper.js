var p1Button = document.querySelector("#p1");
var p2Button = document.querySelector("#p2");
var resetButton = document.querySelector("#reset");
var p1Span = document.getElementsByTagName("span")[0];
var p1Score = 0;
var p2Span = document.getElementsByTagName("span")[1];
var p2Score = 0;
var gameOver = false;
var winningScore = 5;
var input = document.querySelector("input");
var p = document.querySelector("p span");


p1Button.addEventListener("click", function(){
	if(!gameOver){
		p1Score++;
		if(p1Score === winningScore){
			gameOver = true;
			p1Span.classList.add("winner");
		}
		p1Span.textContent = p1Score;
	}
});


p2Button.addEventListener("click", function(){
if(!gameOver){
		p2Score++;
		if(p2Score === winningScore){
			gameOver = true;
			p2Span.classList.add("winner");
		}
		p2Span.textContent = p2Score;
	}
});

resetButton.addEventListener("click", function(){
	reset();
});

function reset(){
	p1Score = 0; 
p1Span.textContent = 0;
p2Score = 0;
p2Span.textContent = 0;
gameOver = false;
p1Span.classList.remove("winner");
p2Span.classList.remove("winner");
};



input.addEventListener("change", function(){
	p.textContent = this.value;
	winningScore = Number(this.value);
	reset();
});
