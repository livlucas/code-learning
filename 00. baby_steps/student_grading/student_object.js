"use strict";

var studentBase = {
    name: null,
    age: 0,
    course: null,
    tests: null,
    finals: null,
    length: 0,

    create: function (name, age, course, address, phone) {
        var newStudent = Object.create(studentBase);

        newStudent.name = name || studentBase.name;
        newStudent.age = age || studentBase.age;
        newStudent.course = course || studentBase.course;
        newStudent.address = address || studentBase.address;
        newStudent.phone = phone || studentBase.phone;
        newStudent.tests = [];
        newStudent.finals = [];

        return newStudent;
    },

    createTest: function (grade) {
    	this.tests[this.tests.length] = grade;      
    },

    createFinal: function (grade) {
    	this.finals[this.finals.length] = grade;
    }

    calculateAverage: function () {
    	var i = 0, j = 0, sumTests = 0;

    	if (this.tests.length === 0) {
    		return 0;
    	}

    	for (i = 0, i < this.tests.length; i += 1) {
    		sumTests = sumTests + this.tests[i]; 
    	}

    	average = sumTests / this.tests.length;
    	
    	return sumTests;






        var i, sum = 0, grade, average;

        if (this.grades.length === 0 && this.grades.length === 0) {
        	return 0;
        }

        for (i = 0; i < this.grades.length; i += 1) {
            grade = this.grades[i];
            sum = sum + grade;
        }

        average = sum / this.grades.length;

        return average;
    }
};