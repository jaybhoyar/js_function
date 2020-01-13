// Write the below function in five different forms. i.e
// 1. Function Decleration
// 2. Function Expression
// 3. Arrow Function Without Curly Braces
// 4. Arrow Function With Curly Braces
// 5. Function Invocation

// Example Start
/**
 * Converts a number a string.
 * @param {number} n
 * @return {string} the number as a string
 */

//Function Decleration
function convertToString(n) {
	return String(n);
}

// Function Expression
let convertToString1 = function(n) {
	return String(n);
};

// Arrow Function
let convertToString = n => String(n);

// Arrow Function With Curly Bracket

let convertToString = n => {
	return String(n);
};

// Function Invocation

convertToString(21); // "21"

// Example End

/**
 * Adds one to a given number.
 * @param {number} n
 * @return {number}
 */
//Function Decleration

function addOne(n) {
	return n + 1;
}
let addOne = function(n) {
	return n + 1;
};
let addOne = n => n + 1;

let addOne = n => {
	return n + 1;
};

addOne(15);

/**
 * Subtracts one from a given number.
 * @param {number} n
 * @return {number}
 */
function subOne(n) {
	return n - 1;
}
let subOne = function(n) {
	return n - 1;
};
let subOne = n => n - 1;

let subOne = n => {
	return n - 1;
};

subOne(15);
/**
 * Adds two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the sum
 */
function addTwonumbers(x, y) {
	return x + y;
}
let addTwonumbers = function(x, y) {
	return x + y;
};
let addTwonumbers = (x, y) => x + y;

let addTwonumbers = (x, y) => {
	return x + y;
};

addTwonumbers(15, 16);

/**
 * Subtracts the second number from the first.
 * @param {number} x
 * @param {number} y
 * @return {number} the difference
 */
function subTwonumbers(x, y) {
	return x - y;
}
let subTwonumbers = function(x, y) {
	return x - y;
};
let subTwonumbers = (x, y) => x - y;

let subTwonumbers = (x, y) => {
	return x - y;
};

subTwonumbers(20, 11);

/**
 * Multiplies two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the product
 */
function mulTwonumbers(x, y) {
	return x * y;
}
let mulTwonumbers = function(x, y) {
	return x * y;
};
let mulTwonumbers = (x, y) => x * y;

let mulTwonumbers = (x, y) => {
	return x * y;
};

mulTwonumbers(20, 11);
/**
 * Divides the first number by the second.
 * @param {number} x
 * @param {number} y
 * @return {number} the quotient
 */
function divideTwonumbers(x, y) {
	return x / y;
}
let divideTwonumbers = function(x, y) {
	return x / y;
};
let divideTwonumbers = (x, y) => x / y;

let divideTwonumbers = (x, y) => {
	return x / y;
};

divideTwonumbers(20, 10);

/**
 * Multiplies a number by itself.
 * @param {number} x, number to be squared
 * @return {number} squared
 */
function mulByitself(x) {
	return x * x;
}
let mulByitself = function(x) {
	return x * x;
};
let mulByitself = x => x * x;

let mulByitself = x => {
	return x * x;
};

mulByitself(20, 10);

/**
 * Performs a mathematical operation on two numbers.
 * Also prints out the equation: (i.e.) "1 + 5 = 6" or "8 / 2 = 4".
 * @param {string} operation "add", "subtract", "multiply", or "divide"
 * @param {number} x
 * @param {number} y
 * @return {number} the result
 */
function mathematicalOperation(x, y, operation) {
	switch (operation) {
		case "+":
			return console.log(x + " + " + y + " = " + x + y);
			break;
		case "-":
			console.log(x + " - " + y + " = " + x - y);
			break;
		case "*":
			console.log(x + " * " + y + " = " + x * y);
			break;
		case "/":
			console.log(x + " / " + y + " = " + x / y);
			break;
		default:
			console.log("Wrong Input");
			break;
	}
}
let mathematicalOperation = function(x, y, operation) {
	switch (operation) {
		case "+":
			console.log(x + " + " + y + " = " + x + y);
			break;
		case "-":
			console.log(x + " - " + y + " = " + x - y);
			break;
		case "*":
			console.log(x + " * " + y + " = " + x * y);
			break;
		case "/":
			console.log(x + " / " + y + " = " + x / y);
			break;
		default:
			console.log("Wrong Input");
			break;
	}
};

let mathematicalOperation = (x, y, operation) => {
	switch (operation) {
		case "+":
			console.log(x + " + " + y + " = " + x + y);
			break;
		case "-":
			console.log(x + " - " + y + " = " + x - y);
			break;
		case "*":
			console.log(x + " * " + y + " = " + x * y);
			break;
		case "/":
			console.log(x + " / " + y + " = " + x / y);
			break;
		default:
			console.log("Wrong Input");
			break;
	}
};

mathematicalOperation(20, 10, "/");

/**
 * Returns true if `a` is greater than `b`.
 * @param {number} a
 * @param {number} b
 * @return {boolean} `a` is larger than `b`
 */
function greaterThan(a, b) {
	return a > b ? true : false;
}
let greaterThan = function(a, b) {
	return a > b ? true : false;
};
let greaterThan = (a, b) => (a > b ? true : false);

let greaterThan = (a, b) => {
	return a > b ? true : false;
};

greaterThan(20, 10);
/**
 * Returns true if `a` is less than `b`.
 * @param {number} a
 * @param {number} b
 * @return {boolean} `a` is smaller than `b`
 */

function lessThan(a, b) {
	return a < b ? true : false;
}
let lessThan = function(a, b) {
	return a < b ? true : false;
};
let lessThan = (a, b) => (a < b ? true : false);

let lessThan = (a, b) => {
	return a < b ? true : false;
};

lessThan(20, 10);

/**
 * Returns true if `a` and `b` are equal.
 * @param {number} a
 * @param {number} b
 * @return {boolean} the numbers are equal
 */
function equal(a, b) {
	return a == b ? true : false;
}
let equal = function(a, b) {
	return a == b ? true : false;
};
let equal = (a, b) => (a == b ? true : false);

let equal = (a, b) => {
	return a == b ? true : false;
};

equal(10, 10);

/**
 * Returns the smallest value of two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the smallest number
 */
function smallest(x, y) {
	return x < y ? x : y;
}
let smallest = function(x, y) {
	return x < y ? x : y;
};
let smallest = (x, y) => (x < y ? x : y);

let smallest = (x, y) => {
	return x < y ? x : y;
};

smallest(20, 10);

/**
 * Returns the largest value of two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the largest number
 */

function largest(x, y) {
	return x > y ? x : y;
}
let largest = function(x, y) {
	return x > y ? x : y;
};
let largest = (x, y) => (x > y ? x : y);

let largest = (x, y) => {
	return x > y ? x : y;
};

largest(20, 10);

/**
 * Returns true if `n` is even.
 * @param {number} n
 * @return {boolean} the number is even
 */
function even(n) {
	return n % 2 == 0 ? true : false;
}
let even = function(n) {
	return n % 2 == 0 ? true : false;
};
let even = n => (n % 2 == 0 ? true : false);

let even = n => {
	return n % 2 == 0 ? true : false;
};
even(12);
/**
 * Returns true if `n` is odd.
 * @param {number} n
 * @return {boolean} the number is odd
 */
function odd(n) {
	return n % 2 != 0 ? true : false;
}
let odd = function(n) {
	return n % 2 != 0 ? true : false;
};
let odd = n => (n % 2 != 0 ? true : false);

let odd = n => {
	return n % 2 != 0 ? true : false;
};
odd(15);

/**
 * Returns a letter grade.
 * "A": 90-100%
 * "B": 80-89%
 * "C": 70-79%
 * "D": 60-69%
 * "F": 0-59%
 * @param {number} score
 * @param {number} total maximum possible score
 * @return {string} the score represented as a letter grade
 */
function grade(total) {
	if (total >= 90 && total <= 100) {
		return "A";
	} else if (total >= 80 && total <= 89) {
		return "B";
	} else if (total >= 70 && total <= 79) {
		return "C";
	} else if (total >= 60 && total <= 69) {
		return "D";
	} else if (total >= 0 && total <= 59) {
		return "F";
	}
}
let grage = function(total) {
	if (total >= 90 && total <= 100) {
		return "A";
	} else if (total >= 80 && total <= 89) {
		return "B";
	} else if (total >= 70 && total <= 79) {
		return "C";
	} else if (total >= 60 && total <= 69) {
		return "D";
	} else if (total >= 0 && total <= 59) {
		return "F";
	}
};
let grade = total => {
	if (total >= 90 && total <= 100) {
		return "A";
	} else if (total >= 80 && total <= 89) {
		return "B";
	} else if (total >= 70 && total <= 79) {
		return "C";
	} else if (total >= 60 && total <= 69) {
		return "D";
	} else if (total >= 0 && total <= 59) {
		return "F";
	}
};
grade(85);

/**
 * Joins two strings with a space.
 * @param {string} word1
 * @param {string} word2
 * @return {string} joined the words joined with a space
 */

function joinString(word1, word2) {
	return word1 + " " + word2;
}
let joinString = function(word1, word2) {
	return word1 + " " + word2;
};
let joinString = (word1, word2) => word1 + " " + word2;

let joinString = (word1, word2) => {
	return word1 + " " + word2;
};
joinString("hello", "world");
