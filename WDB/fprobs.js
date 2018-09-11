function isEven(x){
	return x % 2 === 0
	}

/*
function factorial(x){
	while(x >= 1) {
		return(x*(x-1)=y);
	x-1;
	}
}*/

function factorial(x){
var result = 1
	for(var i = 2; i <= x; i++){
		result = result * i;
	}
	return result;
}