"use strict";

var nextId = 0;
var studentBase = {
	name: null,
	id: 0,
	age: null,
	course: null,
	tests: null,
	finalTest: null,

	create: function (name, age, course) {
		var newStudent = Object.create(studentBase);

		newStudent.name = name || studentBase.name;
		newStudent.age = age || studentBase.age;
		newStudent.course = course || studentBase.course;
		newStudent.tests = [];
		newStudent.id = this.generateId();

		return newStudent;
	},

	generateId: function() {
		nextId += 1;
		return nextId;
	},

	addRegularTest: function (grade) {
		var test = testBase.create(grade, 'regular');

		this.tests[this.tests.length] = test;
	},

	setFinalTest: function (grade) {
		this.finalTest = testBase.create(grade, 'final');
	}
};

var testBase = {
	grade: null,
	type: null,

	create: function (grade, type) {
		var newTest = Object.create(testBase);

		newTest.grade = grade || testBase.grade;
		newTest.type = type || testBase.type;

		return newTest;
	}
};

var resultManager = {
	approveds: null,
	fails: null,
	finals: null,

	init: function () {
		this.approveds = [];
		this.fails = [];
		this.finals = [];
	},

	calculateAverage: function (student) {
		var i, average = 0, sum = 0;

		for (i = 0; i < student.tests.length; i += 1) {
			sum = student.tests[i].grade + sum;
		}

		average = sum / student.tests.length;
		return average;
	},

	calculateFinalAverage: function (student) {
		var finalAverage;

		finalAverage = (this.calculateAverage(student) + student.finalTest.grade) / 2;

		return finalAverage;
	},

	studentResult: function (student) {
		var average = this.calculateAverage(student);

		if (average >= 7) {
			return 'approved';
		} else if (average < 7 && average > 5) {
			return 'final';
		} else {
			return 'failed';
		}
	},

	processResults: function (students) {
		var i, result, finalAverage, student;

		this.init();
		for (i = 0; i < students.length; i += 1) {
			result = this.studentResult(students[i]);

			if (result === 'approved') {
				this.approveds[this.approveds.length] = students[i];
			} else if (result === 'final') {
				this.finals[this.finals.length] = students[i];
			} else {
				this.fails[this.fails.length] = students[i];
			}
		}

		for (i = 0; i < this.finals.length; i += 1) {
			student = this.finals[i];
			finalAverage = this.calculateFinalAverage(student);

			if (finalAverage >= 5) {
				this.approveds[this.approveds.length] = student;
			} else {
				this.fails[this.fails.length] = student;
			}
		}
	}
}


//testArea
var livia = studentBase.create('livia', 31, 'acc');
var scott = studentBase.create('scott', 42, 'bs');
var lorena = studentBase.create('lorena', 31, 'drama');
var henrique = studentBase.create('henrique', 30, '3D');



livia.addRegularTest(3);
livia.addRegularTest(8);
livia.setFinalTest(10);

scott.addRegularTest(10);
scott.addRegularTest(10);
scott.addRegularTest(10);

lorena.addRegularTest(0);
lorena.addRegularTest(3);

var students = [livia, scott, lorena];
resultManager.processResults(students);


//LIVIA LEVEL UP!
// methods unlocked: [Array level 2]
//
// array.push(element); //insere no final
// element = array.pop(); //remove do final
//

//Ex.:
var foodPack = ['biscoito', 'chá verde', 'barra de cereal'];
//adding new food in the pack
foodPack.push('barra de chocolate');
foodPack.push('ração');

//removing food pack
var currentFood = foodPack.pop();