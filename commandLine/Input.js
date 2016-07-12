var readline = require('readline');
var rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

rl.question("What is your Name?", function(answer) {
	console.log("Your Name is:" + answer);
	console.log("End");
});