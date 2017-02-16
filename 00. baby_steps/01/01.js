"use strict";

//debugger;


/*var markTotalExpenses;
var jasonTotalExpenses;
var anthonyTotalExpenses;
var homeExpense;
var carExpense;
var usdToBrlRate = 3.1;
*/

//mark
/*var hotel = 250;
var carRent = 1380;
var gas = 380;
var food = 180;

homeExpense = (hotel + food) / usdToBrlRate;
carExpense = (carRent + gas) / usdToBrlRate;
markTotalExpenses = (homeExpense + carExpense);

console.log('mark\'s expenses are:', homeExpense, carExpense, markTotalExpenses);

//jason
hotel = 500;
carRent = 2580;
gas = 100;
food = 500;

homeExpense = (hotel + food) / usdToBrlRate;
carExpense = (carRent + gas) / usdToBrlRate;
jasonTotalExpenses = (homeExpense + carExpense);

console.log('jason\'s expenses are:',homeExpense, carExpense, jasonTotalExpenses);

//anthony
hotel = 50;
carRent = 0;
gas = 0;
food = 80;

homeExpense = (hotel + food) / usdToBrlRate;
carExpense = (carRent + gas) / usdToBrlRate;
anthonyTotalExpenses = (homeExpense + carExpense);


console.log('anthony\'s expenses are:',homeExpense, carExpense, anthonyTotalExpenses);


	//usd = brl / 3.1;
	//brl = usd * 3.1;
	*/

var brlUsdRate = 3.1;

//function to transform brazilian real to US dollars
function brlToUsd(brl) {
	return brl / brlUsdRate;
}

//function to transform US dollars to brazilian real
function usdToBrl(usd) { 
	return usd * brlUsdRate;
}

function totalExpensesBrdToUsd(name, hotel, carRent, gas, food) {
	var totalExpenses;
	var homeExpense;
	var carExpense;

	homeExpense = brlToUsd(hotel + food);
	carExpense =  brlToUsd(carRent + gas);
	totalExpenses = (homeExpense + carExpense);

	console.log(name + '\'s expenses are:',homeExpense, carExpense, totalExpenses);
}

totalExpensesBrdToUsd('mark', 250, 1380, 380, 180);
totalExpensesBrdToUsd('jason', 500, 2580, 100, 500);
totalExpensesBrdToUsd('anthony', 50, 0, 0, 80);


//==================================================
function fahrenheitToCelsius(celsius) {
	return (celsius * 1.8) + 32;
}

function celsiusToFahrenheit(fahrenheit) {
	return (fahrenheit -32)/1.8;
}


//==================================================
//function to calculate if student is approved
function isApproved(grade1, grade2, grade3) {

	var finalGrade = (grade1 + grade2 + grade3)/3;
	
	if (finalGrade >= 7) {
		return false;
	} else {
		return true;
	}
}

 //===================================================
//function to calculate factor
 function factorial(number) {

 	var factor = number;
 	var currentNumber = number;

 	while (currentNumber > 1) {
 		currentNumber -= 1;
 		factor = factor * currentNumber;

 	}
 	return factor;
 }

//function to calculate the sum of the number chosen + (number - previousNumber) until it reaches 0.
//ex: 10 + 9 + 8 + 7 + 6 + 5 + 4 + 3 + 2 + 1
function sumOfValues(number) {
	var sumNumber = number;
	var currentNumber = number;

	while (currentNumber > 0) {
		sumNumber = sumNumber + (currentNumber - 1);
		currentNumber -= 1;
	}

	return sumNumber;
}

//calculate fibonacci
function fib(number) {

	var currentNumber = 1;
	var prevNumber = 1;
	var fibonacci =1;

	if (number < 2) {
		return 1;
	}

	while (number >1) {
		fibonacci = currentNumber + prevNumber;
		prevNumber = currentNumber;
		currentNumber = fibonacci;
		//console.log(fibonacci);
		number -=1

	}
	return fibonacci;
}

//calculate prime (TODO!!!!!!)
function isPrime(numberTyped) {
	if (numberTyped == 2) {
		return true;
	}
	while (numberTyped % 2 !== 0) {
		return true;
	}
	return false;
}


var a = [];
//find position where to insert a number in an ascending ordered array.
function findIndex(number) {
	var i = 0;

	while ((i < a.length) && (number > a[i])) {
		i +=1;
	}
	return i;
}

function getElementsFromIndex(i) {
	var aux = [];

		//aux[0] = a[i];
	while (i < a.length) {
		aux[aux.length] = a[i];
		i += 1;
	}

	return aux;
}

function insertInOrder(number) {
	var i = findIndex(number);
	var aux = getElementsFromIndex(i);
	a[i] = number;

	var j = 0;
	while (j < aux.length) {
		a[i+1] = aux[j]; 
		j += 1;
		i +=1;
	}	
}




