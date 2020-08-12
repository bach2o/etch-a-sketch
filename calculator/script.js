function add (a, b) {
	return a + b;
}

function subtract (a, b) {
	return a - b;
}

function sum (array) {
	let arrayLength = array.length;
	let sum = 0;
	for (i = 0; i < arrayLength; i++) {
		sum += array[i];
	}
	return sum;
}

function multiply (array) {	
	let product = 1;
	for (i = 0; i < array.length; i++) {
		product *= array[i];
	}
	return product;
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
