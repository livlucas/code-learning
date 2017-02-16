"use strict";

//function factorial with for loop
function factorial(number) {
	var i,
		fact = number;

	for (i = number; i > 1; i -= 1) {
		fact = fact * (i - 1);
	}

	return fact;
}

//function factorial with recursion
function recursiveFactorial(number) {
	if (number === 0) {
		return 1;
	}

	if (number < 0) {
		return;
	}

	return number * recursiveFactorial(number - 1);

}

//function fibonacci with for loop
function fibonacci(number) {
	var i,
		current = 1,
		previous = 1,
		fib;

	if ((number === 1) || (number === 2)) {
		return 1;
	}

	for (i = 2; i < number; i += 1) {
		fib = current + previous;
		previous = current;
		current = fib;
	}

	return fib;
}

//function fibonacci with recursion
function fibRecursive(number) {
	if (number <= 0) {
		return;
	}

	if ((number === 1) || (number === 2)) {
		return 1;
	}

	return fibRecursive(number - 2) + fibRecursive(number -1);
}

//function that will sum number + all number before it
function sumOfValues (number) {
	var i,
		sum = number;

	for (i = number; i > 0; i -= 1) {
		sum = sum + (i - 1);
	}

	return sum;
}


function sumOfValuesRecursive(number) {
	if (number === 1) {
		return 1;
	}

	if (number < 0) {
		return;
	}

	return number + sumOfValuesRecursive(number - 1);

}

//find the index position that a number should be in an incremental list
function findPosition(list, number) {
	var i;

	if (list.length === 0) {
		return;
	}

	for (i = 0; ((number > list[i]) && (i < list.length)); i += 1) {
	}

	return i;
}

//find the index position that a number should be in an incremental list with recursion
function findPositionRecursive(list, number, i) {
	if (i === undefined) {
		i = 0;
	}

	if (list.length === 0) {
		return;
	}

	if (i === list.length) {
		return i;
	}

	if (number < list[i]) {
		return i;
	}

	return findPositionRecursive(list, number, i + 1);

}

//find the index position that a number should be 
//in an incremental list with recursion and slice()
function findPositionV2(list, number) {

}

//receive a list and inverse the elements of the list
function inverseList() {

}



//inverse list using push()
var list = [1, 2, 3, 4, 5, 6, 10, 9, 7];
function inverseListWithPush(list) {
	var i,
		inverse = [];

	for (i = list.length - 1; i >= 0; i -= 1) {
		inverse.push(list[i]);
	}

	return inverse;
}


function mergedLists() {

}

function orderList(list) {
	var i,
		index,
		smallest,
		ordered = [],
		before,
		after;

	while (list.length > 0) {	
		smallest = list[0];
		index = 0;

		for (i = 1; i < list.length; i += 1) {
			if (smallest > list[i]) {
				smallest = list[i];
				index = i;
			}
		}	

		before = list.slice(0, index);
		after = list.slice(index + 1);
		list = before.concat(after);
		ordered.push(smallest);
	}

	return ordered;
}




