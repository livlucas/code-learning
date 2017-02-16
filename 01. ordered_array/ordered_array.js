"use strict";


var orderedArray = [];

function findIndex(number) {
	var i = 0;

	while ((i < orderedArray.length) && (number > orderedArray[i])) {
		i +=1;
	}
	return i;
}

function getElementsFromIndex(i) {
	var aux = [];

	while (i < orderedArray.length) {
		aux[aux.length] = orderedArray[i];
		i += 1;
	}

	return aux;
}

function insertInOrder(number) {
	var i = findIndex(number);
	var aux = getElementsFromIndex(i);
	orderedArray[i] = number;

	var j = 0;
	while (j < aux.length) {
		orderedArray[i+1] = aux[j]; 
		j += 1;
		i +=1;
	}	
}

//test area
insertInOrder(3);
console.log(orderedArray); // expected: [3]
insertInOrder(24);
console.log(orderedArray); // expected: [3, 24]
insertInOrder(12);
console.log(orderedArray); // expected: [3, 12, 24]
insertInOrder(2);
console.log(orderedArray); // expected: [2, 3, 12, 24]
insertInOrder(10);
console.log(orderedArray); // expected: [2, 3, 10, 12, 24]
insertInOrder(50);
console.log(orderedArray); // expected: [2, 3, 10, 12, 24, 50]
insertInOrder(11);
console.log(orderedArray); // expected: [2, 3, 10, 11, 12, 24, 50]

