function createList() {
    var list = {};
    list.length = 0;

    return list;
}

function addInLastPosition(list, element) {
    list[list.length] = element;
    list.length += 1;
}

function removeLast(list) {
    var element;

    list.length -= 1;
    element = list[list.length];
    delete list[list.length];

    return element;
}

function findIndexOfElement(list, element) {
    var i;

    for (i = 0; i < list.length; i += 1) {
        if (list[i] === element) {
            return i;
        }
    }

    return -1;
}

function removeFirst(list) {
    var i,
        element, 
        lastIndex;

    if (list.length === 0) {
        return undefined;
    }

    element = list[0];
    lastIndex = list.length - 1;
    for (i = 0; i < lastIndex; i += 1) {
        list[i] = list[i + 1];
    }

    delete list[lastIndex];
    list.length -= 1;

    return element;
}


var listBase = {
    //fields
    length: 0,

    //methods
    create: function () {    
        var newList = Object.create(listBase);
        newList.length = listBase.length;

        return newList;
    },

    add: function (element) {
        this[this.length] = element;
        this.length += 1;
    },

    remove: function () {
        var element;

        this.length -= 1;
        element = this[this.length];
        delete this[this.length];

        return element;
    },

    sumAll: function () {
        var i, sum;

        for (i = 0, sum = 0; i < this.length; i += 1) {
            sum += this[i];
        }

        return sum;
    },

    countEvens: function () {
        var i, counter = 0;

        for (i = 0; i < this.length; i += 1) {
            if (this[i] % 2 === 0) {
                counter += 1;
            }
        }

        return counter;
    }
};

var studentBase = {
    name: null,
    age: 0,
    course: null,
    grades: null,

    create: function (name, age, course) {
        var newStudent = Object.create(studentBase);

        newStudent.name = name || studentBase.name;
        newStudent.age = age || studentBase.age;
        newStudent.course = course || studentBase.course;
        newStudent.grades = [];

        return newStudent;
    },

    addGrade: function (grade) {
        this.grades[this.grades.length] = grade;
    },

    calculateAverage: function () {
        var i, sum = 0, grade, average;

        if (this.grades.length === 0) return 0;

        for (i = 0; i < this.grades.length; i += 1) {
            grade = this.grades[i];
            sum = sum + grade;
        }

        average = sum / this.grades.length;

        return average;
    }
};