"use strict";

window.TICTACTOE = {
    template: {
        line: '',
        square: '',
        'winner-panel': '',
        'restart-panel': ''
    },

    winner: '',

    init: function () {
        this.fillSquares();
        this.fetchTemplates();
        this.resetGame();
        this.bindEvents();
    },

    fetchTemplates: function () {
        Object
        .keys(this.template)
        .forEach(function (key) {
            this[key] = document.getElementById('template-' + key).innerHTML;
        }.bind(this.template));
    },

    resetGame: function () {
        this.winner = '';

        board.forEach(function (column) {
            column.forEach(function (square) {
                square.value = '';
            });
        });

        this.renderUI();
    },

    fillSquares: function () {
        var row, column;

        for (row = 0; row < 3; row += 1) {
            board[row] = [];
            for (column = 0; column < 3; column += 1) {
                board[row][column] = {
                    value: ''
                }
            }
        }
    },

    renderUI: function () {
        var html = '', lineHtml;

        board.forEach((line, l) => {
            lineHtml = '';

            line.forEach((square, c) => {
                lineHtml += this.template
                    .square
                    .replace('{column_number}', c)
                    .replace('{square_content}', square.value);
            });

            html += this.template
                .line
                .replace('{line_number}', l)
                .replace('{line_content}', lineHtml);
        });

        html += this.template['winner-panel'].replace('{winner_content}', this.winner);
        html += this.template['restart-panel'];

        document.body.innerHTML = html;
    },

    bindEvents: function () {
        document.body.addEventListener('click', this.click.bind(this), false);
    },

    click: function (e) {
        var target = e.target,
            line, column;

        if (target.classList.contains('tictactoe-square')) {
            if (this.winner) return;
            column = +target.getAttribute('data-column');
            line = +target.parentElement.getAttribute('data-line');
            makePlay(board[line][column]);
            this.checkGameOver();
        } else if (target.classList.contains('tictactoe-restart-game')) {
            this.resetGame();
        } else return;


        this.renderUI();
    },

    checkGameOver: function () {
        var winner = checkGameWinner() || '';

        if (winner.toLowerCase() === 'x' 
            || winner.toLowerCase() === 'o') {
            this.winner = winner + ' wins!';
        } else if (winner) {
            this.winner = 'Drawn';
        }
    }
};

window.addEventListener('load', function () {
    window.TICTACTOE.init();
}, false);
