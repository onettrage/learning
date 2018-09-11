for(num = -10; num <= 19; num++){
	console.log(num);
}

for(num = 10; num <= 40; num+=2){
	console.log(num);
}

for(num = 300; (num <= 333)/* && (num % 2 !== 0)*/; num++){
	if(num % 2 !== 0){console.log(num);}
}

for(num = 5; (num <= 50)/* && (num % 5 === 0 && num % 3 ===0)*/; num++){
	if(num % 5 === 0 && num % 3 ===0){console.log(num);}
}