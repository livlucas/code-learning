"use strict";

var linkedListTests = {
    OK: '<span style="color:green">ok</span>',
    FAIL: '<b style="color:red">FAIL</b>',

    container: null,
    list: null,

    activeTests: [
        'shift',
        'unshift',
        //'count',
        //'toString',
        //'at',
        'contains',
        //'findIndex',
        'push',
        //'pop',
        //'empty',
        //'addAt',
        //'remove'
    ],

    init: function () {
        this.container = document.getElementById('test-result');

        this.runTests();
    },

    //tests runner
    preTestEmptyList: function () {
        this.list = Object.create(linkedList);
        this.list.first = null;
    },

    preTest2Elements: function () {
        this.preTestEmptyList();
        this.list.first = {
            value: 10,
            next: {
                value: 20,
                next: null
            }
        };
    },

    preTest5Elements: function () {
        this.preTestEmptyList();
        this.list.first = {
            value: 10,
            next: {
                value: 20,
                next: {
                    value: -1,
                    next: {
                        value: 'content',
                        next: {
                            value: false,
                            next: null
                        }
                    }
                },
            }
        };
    },

    runTests: function () {
        this.log('Tests running...\n');
        this.activeTests.forEach((name) => {
            var results;

            this.log('\nTEST: ' + name + '\n');
            results = this[name + 'Test']();
            this.logResults(results);
            this.log('-------------\n');
        });
    },

    logResults: function (results) {
        (results || (results = [{desc: 'empty test', status: '0'}]))
        .forEach((r) => {
            this.log('\t' + r.desc + ': ' + r.status + '\n');
        });
    },

    log: function (string) {
        this.container.innerHTML += (string || '');
    },


    //TESTS
    shiftTest: function () {
        var r1, r2,
            expected;

        //arrange
        r1 = {
            desc: 'em lista vazia, shift insere o elemento como primeiro e único elemento'
        };
        this.preTestEmptyList();
        expected = 'shift testing';

        //act
        this.list.shift(expected);

        //assert
        r1.status = (
            (this.list.first !== null)
            && (this.list.first.value === expected) 
            && (this.list.first.next === null)
        ) ? this.OK : this.FAIL;


        //arrange
        r2 = {
            desc: 'em lista não vazia, shift insere o elemento no início sem perder os outros elementos'
        };
        this.preTest2Elements();
        expected = ['new elemenet', this.list.first.value];

        //act
        this.list.shift(expected[0]);

        //assert
        r2.status = (
            (this.list.first !== null)
            && (this.list.first.value === expected[0]) 
            && (this.list.first.next !== null)
            && (this.list.first.next.value === expected[1])
        ) ? this.OK : this.FAIL;

        

        return [r1, r2];
    },

    unshiftTest: function () {
        var r1, r2,
            expected;

        //arrange
        r1 = {
            desc: 'unshift em lista vazia deve retornar undefined'
        };
        this.preTestEmptyList();

        //act
        expected = this.list.unshift();

        //assert
        r1.status = (
            (expected === undefined)
        ) ? this.OK : this.FAIL;


        //arrange
        r2 = {
            desc: 'unshift remove apenas um elemento da lista, fazendo o segundo ser o novo primeiro'
        };
        this.preTest2Elements();
        expected = {
            firstValue: this.list.first.value,
            secondValue: this.list.first.next.value
        };

        //act
        expected.result = this.list.unshift();

        //assert
        r2.status = (
            (this.list.first !== null)
            && (this.list.first.value === expected.secondValue) 
            && (expected.result === expected.firstValue)           
        ) ? this.OK : this.FAIL;

        return [r1, r2];
    },

    countTest: function () {

    },

    toStringTest: function () {

    },

    atTest: function () {

    },

    containsTest: function () {
        var r1, r2, r3,
            expected;

        //arrange
        r1 = {
            desc: 'contains em lista vazia deve retornar false'
        };
        this.preTestEmptyList();

        //act
        expected = this.list.contains(1);

        //assert
        r1.status = (
            (expected === false)
        ) ? this.OK : this.FAIL;


        //arrange
        r2 = {
            desc: 'contains em lista nao vazia deve retornar true se o elemento existir'
        };
        this.preTest5Elements();

        //act
        expected = this.list.contains(false);

        //assert
        r2.status = (
            expected === true
        ) ? this.OK : this.FAIL;


        //arrange
        r3 = {
            desc: 'contains em lista nao vazia deve retornar false se o elemento nao existir'
        };
        this.preTest5Elements();

        //act
        expected = this.list.contains('this element does not exist');

        //assert
        r3.status = (
            expected === false
        ) ? this.OK : this.FAIL;

        return [r1, r2, r3];
    },

    findIndexTest: function () {

    },

    pushTest: function () {

    },

    popTest: function () {

    },

    emptyTest: function () {

    },

    addAtTest: function () {

    },

    removeTest: function () {

    }
};

window.addEventListener(
    'load',
    linkedListTests.init.bind(linkedListTests), 
    false
);