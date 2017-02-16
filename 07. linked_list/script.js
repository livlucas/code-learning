"use strict";

//factory
function createNode(value) {
    return {
        value: value,
        next: null
    };
}


//linked list interface
var linkedList = {
    first: null,

    //insere o valor na frente da lista
    shift: function (value) {
        var node = createNode(value);

        node.next = this.first;
        this.first = node;
    },

    //remove o primeiro elemento da lista e retorna o VALOR
    unshift: function () {
        var node;

        if (this.first === null) {
            return undefined;
        }

        node = this.first;
        this.first = node.next;
        return node.value;
    },

    //retorna a quantidade de elementos existentes na lista
    count: function () {
        var node = this.first,
            next,
            count;

        if (this.first === null) {
            return 0;
        }

        for (count = 1; node.next !== null; count += 1) {
            next = node.next;
            node = next;
        }

        return count;
    },

      //retorna a quantidade de elementos existentes 
      //na lista com uma semântica melhor.
    countV2: function () {
        var current,
            count = 0;

        for (current = this.first; current !== null; current = current.next) {
            count += 1;
        }

        return count;
    },


    //retorna uma string contendo todos os valores da lista separados por uma vírgula
    toString: function () {
        var current,
            finalString = '';

        if (this.first === null) {
            return '';
        }

        for (current = this.first; current !== null; current = current.next) {
            if (finalString === '') {
                finalString += current.value;
            } else {
                finalString = finalString + ', ' + current.value; 
            }
        }

        return finalString;
    },

    toStringV2: function () {
        var current,
            finalString = '';

        if (this.first === null) {
            return '';
        }

        finalString += this.first.value;
        for (current = this.first.next; current !== null; current = current.next) {
            finalString += (', ' + current.value);
        }

        return finalString;
    },

    //retorna o VALOR do nó na posição definida pelo index
    //ou null se o index não existir
    at: function (index) {
        var indexValue = 0,
            i,
            current = this.first;

        if (this.first === null) {
            return null;
        }

        if (index === 0) {
            return current.value;
        }

        for(i = 0; i < index; i += 1) {
            current = current.next.value;
            
             if (current === null) {
                return null;
            }
        }

        indexValue = current;
        return indexValue;
    },

    atV2: function (index) {
        var i, current;

        for (i = index, current = this.first; 
            (i >= 0) && (current !== null); 
            i -= 1, current = current.next) {}

        if (current !== null) {
            return current.value;
        }

        return null;
    },

    //retorna um boolean
    //se value existe na lista -> true
    //caso contrário -> false
    contains: function (value) {
        var current;

        for (current = this.first; current !== null; current = current.next) {
            if (current.value === value) {
                return true;
            } 
        }
        return false;
    },

    //retorna o índice do value na lista
    //ou -1 se ele não existir
    findIndex: function (value) {
        var current = this.first,
            i;

        if (this.first === null) {
            return -1;
        }   

        if (this.first.value === value) {
            return 0;
        }

        //reflita sobre isso!!!!
        //todas as partes sao usadas??
        for (i = 0; current !== null; i += 1) {
            if (current.value === value) {
                return i;
            }

            if (current.next === null) {
                return -1;
            }

            current = current.next;
        }
    },

    findIndexV2: function (value) {
        var current,
            index = -1;

        for (current = this.first; current !== null; current = current.next) {
            index += 1;
            if (current.value === value) {
                break;
            }
        }

        return index;
    },

    //insere o valor no final da lista
    push: function (value) {
        var current, 
            node;

        node = createNode(value);

        if (this.first === null) {
            this.first = node;
            return;
        }

        for (current = this.first; current.next !== null; current = current.next) {}

        current.next = node;
    },

    //remove o último elemento da lista e retorna o VALOR
    pop: function () {
        var current,
            value;

        //empty list
        if (this.first === null) {
            return;
        }

        //list with single element
        current = this.first;
        if (current.next === null) {
            this.first = null;
            return current.value;
        }

        //two or more elements
        while (current.next.next !== null) {
            current = current.next;
        }

        value = current.next.value;
        current.next = null;

        return value;
    },

    //esvazia completamente a lista
    empty: function () {
        this.first = null;
    },

    //insere na lista o VALOR na posição específicada pelo índice
    addAt: function (index, value) {
        var i = 1,
            current,
            node;

        node = createNode(value);

        if (this.first === null) {
            this.first = node;
            return;
        }

        if (index === 0) {
            this.shift(value);
            return;
        }

        current = this.first;
        while (i < index) {
            if (current === null) {
                this.push(value);
                return;
            }
            current = current.next;
            i += 1;
        }

        node.next = current.next;
        current.next = node;
    },

    //remove da lista o elemento da posição definida pelo index e retorna o valor.
    remove: function (index) {
        var i = 1, 
            current,
            value;

        if (this.first === null) {
            return;
        }

        if ((index === 0) || (this.first.next === null)) {
            return this.unshift();
        }        

        current = this.first;
        while (i < index) {
            if (current.next.next === null) {
                break;
            }
            current = current.next;
            i += 1;
        }

        value = current.next.value;
        current.next = current.next.next;

        return value;
    }
};
