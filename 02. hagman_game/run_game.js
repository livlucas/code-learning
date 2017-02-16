//DO NOT CHANGE ANY OF THIS CODE
window.addEventListener('load', function () {
    var dom = {
        guessing: document.getElementById('js-guessing'),
        wrongGuesses: document.getElementById('js-wrong-guesses'),
        input: document.getElementById('js-guess'),
        form: document.getElementById('js-form-guess')
    };
    
    dom.form.addEventListener('submit', function (e) {
        var letter,
            message
        
        e.preventDefault();
        
        letter = (dom.input.value).trim().toLowerCase();
        
        //skip an empty attempt
        if (!letter) return;
        
        //invocando funcao de hangman.js
        guessALetter(letter);
        
        updateGameUI();
    }, false);
    
    function updateGameUI() {
        updateGuessingPanel();
        updateWrongGuesses();

        if (checkGameEnded()) {
            window.location.reload();
            return;
        }
        
        resetInput();
    }
    
    function checkGameEnded() {
        var message;

        if (!isGameOver() && !isGameWon()) return false;
        
        message = isGameOver() ? 
            'YOU LOST! \n The word was: ' 
            : ' =] \n CONGRATULATIONS! YOU WIN! \n The word is: ';
        message += wordToGuess;

        alert(message);

        return true;
    }
    
    function updateGuessingPanel() {
        var state;
          
        state = guessedWord
            .map(function (l) { return l === undefined ? '_' : l;})
            .join(' ');
        dom.guessing.innerHTML = state;
    }
    
    function updateWrongGuesses() {
        var html;

        html = wrongGuesses.join('-');
        html += '(' + (MAX_ATTEMPTS - 1 - wrongGuesses.length) + ' left)';
        dom.wrongGuesses.innerHTML = html;
    }
    
    function resetInput() {
        dom.input.value = '';
        dom.input.focus();
    }

    //starting game
    sortRandomWord();
    updateGameUI();
}, false);