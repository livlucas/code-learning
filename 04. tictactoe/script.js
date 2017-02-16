"use strict";

//nao preencha essa variavel, o ui.js fará isso
var board = [];

var currentPlayer = 'x';

function makePlay(square) {
	var player;

	if (square.value === "") {
		square.value = currentPlayer;
		changePlayer();
	} 
}

function changePlayer() {
	if (currentPlayer === 'x') {
		currentPlayer = 'o';
	} else {
		currentPlayer = 'x';
	}
}

//checks if game is drawn
function checkIfDrawn() {
    var i = 0,
        j = 0;

    for (i = 0; i < 3; i += 1) {
        for (j = 0; j < 3; j += 1)
            if (board[i][j].value === "") {
                return false;
        }
    }
    return true;
}

//return x, o, or drawn. Return empty if there's no winner.
function checkGameWinner() {
    var i = 0, j = 0, 
    	checkResultX = [], checkResultO = [];
    
    //check lines of board
    while (j < board.length) {
         while (i < board.length) {
            //check if any of the lines are filled with 'x'.
            if (board[j][i].value === 'x') {
                checkResultX[checkResultX.length] = 'x';
                if (checkResultX.length === 3) {
                    return 'x';
                }
            }

            //check if any of the columns are filled with 'o'.
            if (board[j][i].value === 'o') {
                checkResultO[checkResultO.length] = 'o';
                if (checkResultO.length === 3) {
                    return 'o'; 
                }
            }

            i += 1;
        }

        j += 1;
        i = 0;
        checkResultX = [];
        checkResultO = [];
    }

    i = 0;
    j = 0;
    checkResultX = [];
    checkResultO = [];
    //check columns of board
    while (i < board.length) {
        while (j < board.length) {
            //check if any of the columns are filled with 'x'.
            if (board[j][i].value === 'x') {
                checkResultX[checkResultX.length] = 'x';
                if (checkResultX.length === 3) {
                    return 'x';
                }
            }

            //check if any of the columns are filled with 'o'.
            if (board[j][i].value === 'o') {
                checkResultO[checkResultO.length] = 'o';
                if (checkResultO.length === 3) {
                    return 'o';
                }
            }

            j += 1;
        }

        i += 1;
        j = 0;
        checkResultX = [];
        checkResultO = [];
    }

    //check diagonal of board
    i = 0; 
    j = 0;
    checkResultX = [];
    checkResultO = [];
    while (i < board.length) {
        //check if diagonal is filled with 'x'.
        if (board[j][i].value === 'x') {
            checkResultX[checkResultX.length] = 'x';
            if (checkResultX.length === 3) {
                return 'x';
            }
        }

        //check if diagonal is filled with 'o'.
        if (board[j][i].value === 'o') {
            checkResultO[checkResultO.length] = 'o';
            if (checkResultO.length === 3) {
                return 'o';
            }
        }
        i += 1;
        j += 1;
    }

    //check other diagonal of board
    j = 2;
    i = 0;
    checkResultX = [];
    checkResultO = [];
    while (i < board.length) {
        //check if diagonal is filled with 'x'.
        if (board[j][i].value === 'x') {
            checkResultX[checkResultX.length] = 'x';
            if (checkResultX.length === 3) {
                return 'x';
            }
        }

        //check if diagonal is filled with 'o'.
        if (board[j][i].value === 'o') {
            checkResultO[checkResultO.length] = 'o';
            if (checkResultO.length === 3) {
                return 'o';
            }
        }
        j -= 1;
        i += 1;
    }

    if (checkIfDrawn()){
        return 'Drawn!'
    }
}


