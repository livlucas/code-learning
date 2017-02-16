"use strict";

//===================================================
var a = [1,9,10,20];

function inverse(a) {
	var i = a.length -1,
		j = 0,
		inverted = [];

	while (i >= 0) {
		inverted[j] = a[i];
		i -= 1;
		j += 1;
	}

	return inverted;
}


//===================================================
var arrFirst = [1,2,3];
var arrSecond = [4,5,6,10];

//function to merge two arrays into one and get element by element alternately
function mergeArrays(arrFirst, arrSecond) {
	var i = 0,
		j = 0,
		k = 0,
		arrFinal = [];

	//while (k < (arrFirst.length) + (arrSecond.length)) {

	while ((i < arrFirst.length) || (j < arrSecond.length)) {
		if (i < arrFirst.length) {
			arrFinal[k] = arrFirst[i];
			k += 1;
			i += 1;
		}

		if (j < arrSecond.length) {
			arrFinal[k] = arrSecond[j];
			k += 1;
			j += 1;
		}
	}		

	return arrFinal;
}


//===================================================
//1) mescle dois arrays, sendo que o segundo deve ser invertido
//	a = [1,2,3,4]  b = [5,6,7]
//  result -> [1,7,2,6,3,5,4]
var result1 = mergeArrays(arrFirst, inverse(arrSecond));
console.log(arrFirst, arrSecond, "| result:", result1);


//2) mescle um array com o inverso dele mesmo
// a = [1,2,3]
// result -> [1,3,2,2,3,1]
var result2 = mergeArrays(arrFirst, inverse(arrFirst));
console.log(arrFirst, inverse(arrFirst), "| result:", result2);

//3) some 15 em todos os elementos do array
// a = [1,2,3]
// result -> [16,17,18]
function add15(arr) {
	var sums = [], 
		i = 0;

	while (i < arr.length) {
		sums[i] = arr[i] + 15;
		i += 1;
	}

	return sums;   
}

//4) multiplique todos os elementos do array por 2
// a = [1,2,3]
// result -> [2,4,6]
function doubles(arr) {
	var doubles = [], 
		i = 0;

	while (i < arr.length) {
		doubles[i] = arr[i] * 2;
		i += 1;
	}

	return doubles;
}

//5) para cada elemento do array, some o próximo elemento ou 0 se ele não existir
// a = [1,2,3,4]
// result -> [3,5,7,4]
function sumElements(arr) {
	var sumElements = [],
		i = 0,
		j = 1;

	while (i < arr.length) {
		if (j === arr.length) {
			sumElements[i] = arr[i];
		} else {
			sumElements[i] = arr[i] + arr[j];
		}

		i += 1;
		j += 1;
	}
	return sumElements;
}

//6) filtre um array removendo todos os números pares e devolvendo um array apenas com ímpares
function filterEvens(arr) {
	var evens = [],
		i = 0;

	while (i < arr.length) { 
		if (arr[i] % 2 !== 0) { 
			evens[evens.length] = arr[i];
		}

		i += 1;
	}
	return evens;
}

//7) some todos os elementos de um array e devolva a soma
function sumAll(arr) {
	var sum = 0,
		i = 0;

	while (i < arr.length) {
		sum = sum + arr[i];
		i += 1;
	}

	return sum;
}

//8) multiplique todos os elementos de um array e devolva a multiplicação
function multiplyAll(arr) {
	var result = 1,
		i = 0;

	while (i < arr.length) {
		result = result * arr[i];
		i += 1;
	}

	return result;
}

//multiplique todos os elementos de um array e devolva a multiplicação com um for
function multiplyAllComFORpraFazerLiviaFeliz(arr) {
	var result = 1, 
		i;

	for (i = 0; i < arr.length; i += 1) {
		result = result * arr[i];
	}

	return result;
}
