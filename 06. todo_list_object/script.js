"use strict";

//um todo é representado por um objeto como no exemplo abaixo
//  {
//      id - (um campo inteiro único)
//      description - (uma string com a descriçao do todo)
//      done - (boolean se o todo foi feito ou nao)
//  }
//

var todoApp;

var nextId = 1;
function generateId() {
    var id;

    id = nextId;
    nextId += 1;

    return id;
}

function createTodo(description) {
    var todo = {
        id: generateId(),
        description: description,
        done: false,

        toggleDone: function () {
            //change todo state
            this.done = !this.done;
        }
    };

    return todo;
}


//todo app (all methods will be called automaticaly)
todoApp = {
    todos: null, //lista de TODOs

    init: function () {
        this.todos = [];
    },

    addTodo: function (description) {
        this.todos.push(createTodo(description));
    },

    toggleDone: function (id) {
        var i;

        for (i = 0; i < this.todos.length; i += 1) {
            if (this.todos[i].id === id) {
                this.todos[i].toggleDone();
            }
        }
    },

    deleteTodo: function (id) {
        var i,
            notDeleted = [];

        for (i = 0; i < this.todos.length; i += 1) {
            if (this.todos[i].id !== id) {
                notDeleted.push(this.todos[i]);
            }
        }

        this.todos = notDeleted;
    },

    markAllDone: function () {
        var i;

        for (i = 0; i < this.todos.length; i += 1) {
            if (this.todos[i].done !== true)
            this.todos[i].toggleDone();
        }
        console.log()
    },

    deleteAllDone: function () {
        var i,
            notDeleted = [];

        for (i = 0; i < this.todos.length; i += 1) {
            if (this.todos[i].done !== true) {
                notDeleted.push(this.todos[i]);
            }
        }

        this.todos = notDeleted;
    },

    deleteAll: function () {
        this.todos = [];
    },

    countTodos: function () {
        return this.todos.length;
    },

    countNotDone: function () {
        var i,
            notDone = 0;

        for (i = 0; i < this.todos.length; i += 1) {
            if (this.todos[i].done !== true) {
                notDone += 1;
            }
        }
        return notDone;
    }
};
