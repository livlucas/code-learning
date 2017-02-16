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

//retorn x ou o. retorna vazio se ainda nao há vencedor
function checkGameWinner() {
    var i = 0, j = 0,
    	checkResultX = [], checkResultO = [];

    //check lines of board
    while (j < board.length) {
        while (i < board.length) {
            //check if any of the lines are filled with 'x'.
            if (board[j][i].value === 'x') { //NOTA: se o comando está aninhado, ele vem na linha seguida do comando anterior
                checkResultX[checkResultX.length] = 'x';
                if (checkResultX.length === 3) {
                    return 'x';
                }
            }
            
            //check if any of the columns are filled with 'o'.
            if (board[j][i].value === 'o') { //NOTA: se o comando está no mesmo nível do comando anterior, ele vem separado por uma linha em branco
                checkResultO[checkResultO.length] = 'o';
                if (checkResultO.length === 3) {
                    return 'o';
                }
            }

            i += 1;
        }

        j += 1; //NOTA: nesse caso, como todas as atribuições estão num mesmo contexto, elas nao tem espaço entre elas
        i = 0;
        checkResultX = [];
        checkResultO = [];
    }

    //check columns of board
    i = 0; //NOTA: não use virgula fora da declaração de variáveis do bloco VAR
    j = 0;
    checkResultX = [];
    checkResultO = [];
    while (i < board.length) { //NOTA: antes do while, todas as variaveis que vao ser usadas dentro devem ser iniciadas nas linhas anteriores (sem linha extra)
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
}
