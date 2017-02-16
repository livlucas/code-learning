"use strict";

window.TODO = {
    template: {
        'todo-list': '',
        'todo-item': '',
        'todo-add': '',
        'todo-status': ''
    },
    
    container: null,
    
    init: function () {
        this.container = document.getElementById('todo-list-container');
        
        this.fetchTemplates();
        this.bindEvents();
        this.renderUI();
    },

    fetchTemplates: function () {
        Object
        .keys(this.template)
        .forEach(function (key) {
            this[key] = document.getElementById('template-' + key).innerHTML;
        }.bind(this.template));
    },

    renderUI: function () {
        var html, listHtml = '',
            total, totalNotDone;
        
        todos.forEach(function (todo) {
            listHtml += this.template['todo-item']
                .replace(/{id}/gi, todo.id)
                .replace('{done_class}', todo.done ? 'done' : '')
                .replace('{done}', todo.done ? 'checked' : '')
                .replace('{description}', todo.description);
        }.bind(this));
        
        listHtml += this.template['todo-add'];
        html = this.template['todo-list']
            .replace('{list_content}', listHtml);
        
        
        total = countTodos();
        totalNotDone = countNotDone();
        html += this.template['todo-status']
            .replace('{total_todos}', total)
            .replace('{total_not_done}', totalNotDone);
        
        this.container.innerHTML = html;
        document.getElementsByClassName('js-todo-item-add-input')[0].focus();
    },

    bindEvents: function () {
        document.body.addEventListener('click', this.mainControlHandler.bind(this), false);
        document.body.addEventListener('click', this.todoHandler.bind(this), false);
        document.body.addEventListener('keydown', this.addHandler.bind(this), false);
    },

    mainControlHandler: function (e) {
        var target = e.target;

        if (!target.classList.contains('js-todo-control')) return;
            
        if (target.classList.contains('mark-all-done')) {
            markAllDone();
        } else if (target.classList.contains('delete-all-done')) {
            deleteAllDone();
        } else if (target.classList.contains('delete-all')) {
            deleteAll();
        }

        this.renderUI();
    },
    
    getParentByClassName: function (el, className) {
        var candidate;
        
        for (candidate = el; el; el = el.parentNode) {
            if (el.classList.contains(className)) break;
        }
        
        return el;
    },
    
    getChildByClassName: function (el, className) {
        var candidate;

        if (!el) return el;
        
        if (el.classList && el.classList.contains(className)) {
            return el;
        }
        
        candidate = this.getChildByClassName(el.firstChild, className);
        if (!candidate) candidate = this.getChildByClassName(el.nextSibling, className);
        
        return candidate;
    },
    
    todoHandler: function (e) {
        var target = e.target,
            parent,
            description, id;
        
        if (target.classList.contains('js-todo-item-done')) {
            parent = this.getParentByClassName(target, 'todo-item');
            id = +parent.getAttribute('data-todo-id');
            toggleDone(id);
        } else if (target.classList.contains('js-todo-item-delete')) {
            parent = this.getParentByClassName(target, 'todo-item');
            id = +parent.getAttribute('data-todo-id');
            deleteTodo(id);
        } else if (target.classList.contains('js-todo-item-add')) {
            parent = this.getParentByClassName(target, 'todo-item');
            description = this.getChildByClassName(parent, 'js-todo-item-add-input').value;
            addTodo(description);
        } else return;
        
        this.renderUI();
    },
    
    addHandler: function (e) {
        if (e.code !== 'Enter' && e.keyCode !== 13) return;
        
        if (!e.target.classList.contains('js-todo-item-add-input')) return;

        addTodo(e.target.value);
        this.renderUI();
    }
};

window.addEventListener('load', function () {
    window.TODO.init();
}, false);
