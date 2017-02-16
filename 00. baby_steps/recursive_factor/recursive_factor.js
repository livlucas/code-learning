"use strict";

function factorial(number) {
    var i, 
        fact = number;

    if (number < 0) {
    	return;
    }

    if (number === 0) {
    	return 1;
    }

    for (i = 1; i < number; i += 1) {
    	fact = fact * (number - i);
    }    

    return fact;
}

function recursiveFactor(number) {
	if (number <= 1) {
		return 1;
	} else {
		return number * recursiveFactor(number - 1);
	}
}

function fib(number) {
	var prev = 1, current = 1, fib,
		i;

	if (number <= 1) {
		return 1;
	}

	for (i = 1; i < number; i +=1) {
		fib = prev + current;
		prev = current;
		current = fib;
	}

	return fib;
}

function fibRecursive(number) {
	if (number <= 1) {
		return 1;
	} else {
		return (fibRecursive(number - 1) + fibRecursive (number - 2));
	} 
}

function sumOfValues (number) {
	var i = 0,
	sum = 0;

	for (i = 0; i < number; i += 1) {
		sum = sum + number - i;
	}

	return sum;
}

function sumOfValuesRecursive(number) {
	if (number <= 0) {
		return 0;
	} else {
		return (number + sumOfValues(number - 1));
	}
}
function findPosition(list, number) {
	var i;

	for (i = 0; (i < list.length) && (number > list[i]); i += 1) {
	}
	return i;
}

function findPositionRecursive(list, number, i) {
	if (i === undefined) {
		i = 0;
	}

	if (list.length === 0) {
		return 0;
	}

	if (i === list.length) {
		return i;
	} 

	if (number < list[i]) {
		return i;
	}

	return findPositionRecursive(list, number, i + 1);
}

function findPositionV2(list, number) {
	if (list.length === 0) {
		return 0;
	}

	if (number < list[0]) {
		return 0;
	}

	return 1 + findPositionV2(list.slice(1), number);
}



function inverseList() {
	var i = list.length - 1,
		aux = [];

	for (i = list.length - 1; i >= 0; i -= 1) {
		aux.push(list[i]);
	}

	list = aux;
	return list;
}


//inverse list using pop()
var list = [1, 2, 3, 4, 5, 6, 10, 9, 7];
function inverseListWithPop() {
	var i,
		aux = [];

	for (i = 0; list.length > 0; i += 1) {
		aux[i] = list.pop();
	}

	list = aux;
	return list;
}

var listOne = [1,2,3];
var listTwo = ['a', 'b', 'c'];

function mergedLists() {
	var i,
		j,
		k,
		merged = [];

		while (k < (listOne.length + listTwo.length)) {
			merged[k] = listOne[i];
			k += 1;
			i += 1;
			merged[k] = listTwo[j];
			k += 1;
			j += 1;
		}

		return merged;
}

