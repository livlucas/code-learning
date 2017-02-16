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

function totalExpensesBrlToUsd(name, hotel, carRent, gas, food) {
	var totalExpenses;
	var homeExpense;
	var carExpense;

	homeExpense = brlToUsd(hotel + food);
	carExpense =  brlToUsd(carRent + gas);
	totalExpenses = (homeExpense + carExpense);

	console.log(name + '\'s expenses are:',homeExpense, carExpense, totalExpenses);
}

totalExpensesBrlToUsd('mark', 250, 1380, 380, 180);
totalExpensesBrlToUsd('jason', 500, 2580, 100, 500);
totalExpensesBrlToUsd('anthony', 50, 0, 0, 80);

function totalExpenseUsingObject(expense) {
	var totalExpenses,
		homeExpense,
		carExpense;

	homeExpense = brlToUsd(expense.hotel + expense.food);
	carExpense =  brlToUsd(expense.carRental + expense.gas);
	totalExpenses = (homeExpense + carExpense);

	console.log(expense.owner 
		+ '\'s expenses are:', homeExpense, carExpense, totalExpenses);
}

var travelExpenseMark = {
	owner: 'mark',
	hotel: 250,
	carRental: 1380,
	gas: 380,
	food: 180
};

var travelExpenseJason = {
	owner: 'jason',
	hotel: 500,
	carRental: 2580,
	gas: 100,
	food: 500
};

var travelExpenseAnthony = {
	owner: 'anthony',
	hotel: 50,
	carRental: 0,
	gas: 0,
	food: 80
};

totalExpenseUsingObject(travelExpenseMark);
totalExpenseUsingObject(travelExpenseJason);
totalExpenseUsingObject(travelExpenseAnthony);

var travelExpenses = [
	travelExpenseMark,
	travelExpenseAnthony,
	travelExpenseJason
];

function totalExpensesInUSD(expenses) {
	var i = 0;

	while (i < expenses.length) {
		totalExpenseUsingObject(expenses[i]);
		i += 1;
	}
}

console.log("--- usando lista")
totalExpensesInUSD(travelExpenses);