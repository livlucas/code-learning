"use strict";

//um todo é representado por um objeto como no exemplo abaixo
//  {
//      id - (um campo inteiro único)
//      description - (uma string com a descriçao do todo)
//      done - (boolean se o todo foi feito ou nao)
//  }
//

//lista contendo todos os objetos TODO
var todos = [],
    nextId = 0;

//-----[ single todo functions ]-----

function consumeId() {
    var id = nextId;
    nextId += 1;
    return id;
}

//essa funcao cria um todo com a description passada e adiciona o objeto na lista de todo
//lembre que a cada todo criado, o id deve ser único e um inteiro positivo
//os campos do todo estao descritos acima
function addTodo(description) {
    var toDo;

    description = description.trim();
    if (description === "") {
        return;
    } 

    toDo = {};
    toDo.id = consumeId();
    toDo.description = description;
    toDo.done = false;

    todos[todos.length] = toDo;
}

//essa funcao deve procurar pelo todo com o id passado e marcá-lo como feito
function toggleDone(id) {
    var i;

    for (i = 0; i < todos.length; i += 1) {
        if (todos[i].id === id) {
            todos[i].done = !todos[i].done;
            return;
        }
    }
}

//essa funçao deve remover o todo da lista de todos
function deleteTodo(id) {
    var i = 0,
        notRemoved = [];

    while (i < todos.length) {
        if (todos[i].id !== id) {
            notRemoved[notRemoved.length] = todos[i]; 
        }

        i += 1;
    }

    todos = notRemoved;
}


//-----[ list todos functions ]-----

//essa funçao deve marcar todos os TODOs da lista como feitos
function markAllDone() {
    var i = 0;

    while (i < todos.length) {
        todos[i].done = true;
        i += 1;
    }
}

//essa funcao vai deletar todos os TODOs marcados como feitos e deixar os que ainda estao por fazer
function deleteAllDone() {
    var i = 0, 
        notDones = [];

    while (i < todos.length) {
        if (todos[i].done === false) {
            notDones[notDones.length] = todos[i];
        }

        i += 1;
    }

    todos = notDones;
}

//essa funcao deve apagar todos os TODOs da lista, independente do estado
function deleteAll() {
    todos = [];
}

function countTodos() {
    return todos.length;
}

function countNotDone() {
    var i, count = 0;

    for (i = 0; i < todos.length; i += 1) {
        if (todos[i].done === false) {
            count += 1;
        }
    }

    return count;
}