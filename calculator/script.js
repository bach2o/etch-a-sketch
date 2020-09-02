function add (a, b) {
	let x = Number(a) + Number(b);
	return x;
}

function subtract (a, b) {
	return a - b;
}

function division (a, b) {
	return a / b;
}
 
function sum (array) {
	let arrayLength = array.length;
	let sum = 0;
	for (i = 0; i < arrayLength; i++) {
		sum += array[i];
	}
	return sum;
}

function multiply (a, b) {	
	return a * b;
}

function power(base, power) {
	let product = 1;
	for (i = 0; i < power; i++) {
		product *= base;
	}
	return product;
}

function factorial(n) {
	if (n === 0) {
		return 1;
	} else {
		return n * factorial(n - 1);
	}
}

function operate(a, b, op) {
	if (op == "+") {
		return add(a, b);
	} else if (op == "-") {
		return subtract(a, b);
	} else if (op == "x") {
		return multiply(a, b);
	} else if (op == "/") {
		return division(a, b);
	}
}

var buttonObject = {"leftParenthesis": "(", "rightParenthesis": ")", "percentage": "%", "clear": "AC", 
	"zero": 0, "one": 1, "two": 2, "three": 3, "four": 4, "five": 5, "six": 6, "seven": 7, "eight": 8, "nine": 9};
	
document.getElementById('leftParenthesis').addEventListener("click", function() {
	document.getElementById("outputP").innerHTML += "(";
});	
document.getElementById('rightParenthesis').addEventListener("click", function() {
	document.getElementById("outputP").innerHTML += ")";
});
document.getElementById('seven').addEventListener("click", function() {
	document.getElementById("outputP").innerHTML += "7";
});
document.getElementById('one').addEventListener("click", function() {
	document.getElementById("outputP").innerHTML += "1";
});
document.getElementById('zero').addEventListener("click", function() {
	document.getElementById("outputP").innerHTML += "0";
});
document.getElementById('two').addEventListener("click", function() {
	document.getElementById("outputP").innerHTML += "2";
});
document.getElementById('three').addEventListener("click", function() {
	document.getElementById("outputP").innerHTML += "3";
});
document.getElementById('four').addEventListener("click", function() {
	document.getElementById("outputP").innerHTML += "4";
});
document.getElementById('five').addEventListener("click", function() {
	document.getElementById("outputP").innerHTML += "5";
});
document.getElementById('six').addEventListener("click", function() {
	document.getElementById("outputP").innerHTML += "6";
});
document.getElementById('eight').addEventListener("click", function() {
	document.getElementById("outputP").innerHTML += "8";
});
document.getElementById('nine').addEventListener("click", function() {
	document.getElementById("outputP").innerHTML += "9";
});
document.getElementById('sum').addEventListener("click", function() {
	document.getElementById("outputP").innerHTML += "+";
});
document.getElementById('minus').addEventListener("click", function() {
	document.getElementById("outputP").innerHTML += "-";
});
document.getElementById('multiplication').addEventListener("click", function() {
	document.getElementById("outputP").innerHTML += "x";
	
});
document.getElementById('division').addEventListener("click", function() {
	document.getElementById("outputP").innerHTML += "÷";
});

document.getElementById('point').addEventListener("click", function() {
	document.getElementById("outputP").innerHTML += ".";
});



document.getElementById('clear').addEventListener("click", function() {
	document.getElementById("outputP").innerHTML = "";
});

document.getElementById('equal').addEventListener("click", function() {
	let input = document.getElementById("outputP").innerHTML.split('');
	let i;
	
	let refinedInput = [];
	for (i = 0; i < input.length; i++) {
		if (input[i] == "÷" || input[i] == "-" || input[i] == "x" || input[i] == "+") {
			let x = '';
			for (let k = 0; k < i; k++) {
				x += input[k];
			}
			Number(x);
			console.log(x);
			refinedInput.push(x);
			refinedInput.push(input[i]);
			input = input.slice(i+1);			
			i = 0;
		} 
	}
	let x = '';
	for (i = 0; i < input.length; i++) {
		x += input[i];
	}
	Number(x);
	refinedInput.push(x);	
	console.log(refinedInput);
	for (i = 0; i < refinedInput.length; i++) {
		if (refinedInput[i] == "÷") { 
			document.getElementById("outputP").innerHTML = division(refinedInput[i - 1], refinedInput[i + 1]);
		}
		if (refinedInput[i] == "x") {
			document.getElementById("outputP").innerHTML = multiply(refinedInput[i - 1], refinedInput[i + 1]);
		}
		if (refinedInput[i] == "-") {
			document.getElementById("outputP").innerHTML = subtract(refinedInput[i - 1], refinedInput[i + 1]);
		}
		if (refinedInput[i] == "+") {
			document.getElementById("outputP").innerHTML = add(refinedInput[i - 1], refinedInput[i + 1]);
		}
	}
});


function truncateText(selector, maxLength) {
    var element = document.querySelector(selector),
        truncated = element.innerText;

    if (truncated.length > maxLength) {
        truncated = truncated.substr(0,maxLength) + '...';
    }
    return truncated;
}

// document.getElementById('outputParent').innerText = truncateText('p', 110)