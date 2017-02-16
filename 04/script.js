"use strict";

//function that creates a test with such parameters: (grade, type). 
//params:
//	type (normal|final)
//	grade (0-10)
//return: test
function createTest(grade, type) {
	var newTest;

	if ((type !== 'normal') && (type !== 'final')) {
		//eu poderia ao invés de setar um valor padrão
		//lançar um erro
		type = 'normal';
	}

	if (typeof grade !== 'number') {
		//mesma coisa aqui
		grade = 0;
	}

	if (grade < 0) {
		grade = 0;
	} else if (grade > 10) {
		grade = 10;
	}

	newTest = {
		type: type,
		grade: grade
	};

	return newTest;
}

//function that creates a student with such parameters: (name, course, tests) where tests = tests array.
function createStudent(name, course, tests) {
	var newStudent;

	if (typeof name !== 'string') {
		name = '';
	}

	if (typeof course !== 'string') {
		course = '';
	}

	newStudent = {};
	newStudent.name = name;
	newStudent.course = course; 
	newStudent.tests = tests;

	return newStudent;
}

// pegar 1 lista de estudantes e devolver 3 listas dentro de um objeto só:
// 	- aprovados (média >= 7),
// 	- reprovados (média < 5),
// 	- prova final (média < 7 && média >= 5);
function processFinalGradingStatus(students) {
	var i = 0,
		gradeStatus;

	gradeStatus = {};
	gradeStatus.approveds = [];
	gradeStatus.finals = [];
	gradeStatus.fails = [];
	
	while (i < students.length) {
		if (calculateAverage(students[i].tests) >= 7) {
			gradeStatus.approveds[gradeStatus.approveds.length] = students[i];
		} else if (calculateAverage(students[i].tests) < 5) {
			gradeStatus.fails[gradeStatus.fails.length] = students[i];
		} else { 
			gradeStatus.finals[gradeStatus.finals.length] = students[i];
		}
		i += 1;
	}

	return gradeStatus;
}

function calculateAverage(tests) {
	var i = 0,
		sumOfGrades = 0,
		finalGrade;

	while (i < tests.length) {
		sumOfGrades = sumOfGrades + tests[i].grade;
		i += 1;
	}

	finalGrade = sumOfGrades / tests.length;

	return finalGrade;
}
//TEST AREA
var students = [ 
	createStudent('jonh', 'DA', [  //fail
		createTest(5),
		createTest(6),
		createTest(2)
	]),

	createStudent('mark', 'CC', [ //approved
		createTest(10),
		createTest(9),
		createTest(3)
	]),

	createStudent('james', 'DA', [ //finalTest
		createTest(6),
		createTest(2),
		createTest(10)
	]),

	createStudent('anthony', 'DA', [ //finalTest
		createTest(10),
		createTest(10),
		createTest(0)
	]),

	createStudent('alan', 'CC', [ //finalTest
		createTest(4),
		createTest(6),
		createTest(9)
	]),

	createStudent('david', 'DA', [   //finalTest
		createTest(5),
		createTest(6),
		createTest(8)
	]),
];

/*
receber um array de números e retornar um objeto contendo dois campos:
- todos os números ímpares do array inicial
- todos os números pares do array inicial
*/
function oddAndEven(numbers) {
	var i = 0,
	allNumbers = {};
	allNumbers.even = [];
	allNumbers.odd = [];

	while (i < numbers.length) { 
		if (numbers[i] % 2 === 0) {
			allNumbers.even[allNumbers.even.length] = numbers[i];
		} else { 
			allNumbers.odd[allNumbers.odd.length] = numbers[i];
		}
		i += 1;
	}
	return allNumbers;
}