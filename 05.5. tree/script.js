"use strict";

var nodeBase = {
    value: null,
    left: null,
    right: null,
    parent: null,

    create: function (value) {
        var node = Object.create(nodeBase);
        
        node.value = value;
        node.left = null;
        node.right = null;
        node.parent = null;
        
        return node;
    },

    isLeaf: function () {
        return (this.left === null) && (this.right === null);
    }
};

//null representa um espaço vazio
var binaryTree = {
    root: null,

    addNode: function (value) {
        var newNode = nodeBase.create(value),
            currentNode;

        //empty tree case
        if (this.root === null) {
            this.root = newNode;
            return;
        }

        //começa a comparar pela raiz sempre
        currentNode = this.root;
        while (true) {
            //evita valores já existentes na árvore
            if (newNode.value === currentNode.value) {
                break;
            }

            if (newNode.value < currentNode.value) {
                //se existe espaço no lugar onde ele deve entrar,
                //insere na árvore nesse lugar (obviamente)
                if (currentNode.left === null) {
                    currentNode.left = newNode;
                    newNode.parent = currentNode;
                    break;
                } else {
                    //caso contrário, ele tem que caminhar para o filho
                    currentNode = currentNode.left;
                }
            } else {
                if (currentNode.right === null) {
                    currentNode.right = newNode;
                    newNode.parent = currentNode;
                    break;
                } else {
                    currentNode = currentNode.right;
                }
            }
        }
    },

    //true (se o valor existe na árvore)
    //false (se o valor não existe na árvore)
    search: function (value) {
        var currentNode = this.root;

        while (currentNode !== null) {
            if (value === currentNode.value) {
                return true;
            } else if (value < currentNode.value) {
                currentNode = currentNode.left;
            } else {
                currentNode = currentNode.right;
            }
        }

        return false;
    },

    //retorna a quantidade de nós na árvore
    countNodes: function () {
        var sum = 1, 
            currentNode = this.root,
            moves = [],
            lastMove = '';

        if (this.root === null) return 0;

        while (currentNode !== null) {
            if (lastMove === '' && currentNode.left !== null) {
                currentNode = currentNode.left;
                moves.push('left');
                lastMove = '';
                sum += 1;
            } else if (lastMove !== 'right' && currentNode.right !== null) {
                currentNode = currentNode.right;
                moves.push('right');
                lastMove = '';
                sum += 1;
            } else {
                currentNode = currentNode.parent;
                lastMove = moves.pop();
            }
        }

        return sum;
    }
};

var binaryTreeRecursive = {
    root: null,

    addNode: function (value, currentNode) {
        if (this.root === null) {
            this.root = nodeBase.create(value);
            return;
        }

        currentNode = currentNode || this.root;

        if (value < currentNode.value) {
            //insert left
            if (currentNode.left === null) {
                currentNode.left = nodeBase.create(value);
                return;
            }
            this.addNode(value, currentNode.left);
        } else {
            //insert right
            if (currentNode.right === null) {
                currentNode.right = nodeBase.create(value);
                return;
            }
            this.addNode(value, currentNode.right);
        }
    },

    search: function (value, currentNode) {
        currentNode = (currentNode === undefined) ? this.root : currentNode;
        if (currentNode === null) {
            return false;
        }

        if (value === currentNode.value) {
            return true;
        }

        if (value < currentNode.value) {
            return this.search(value, currentNode.left);
        } else {
            return this.search(value, currentNode.right);
        }
    },

    countNodes: function (node) {
        node = (node === undefined) ? this.root : node;

        if (node === null) {
            return 0;
        }

        return 1 + this.countNodes(node.left) + this.countNodes(node.right);
    }
};


// Test Area
binaryTree.addNode(40);
binaryTree.addNode(12);
binaryTree.addNode(45);
binaryTree.addNode(5);
binaryTree.addNode(41);
binaryTree.addNode(100);
binaryTree.addNode(22);


binaryTreeRecursive.addNode(40);
binaryTreeRecursive.addNode(12);
binaryTreeRecursive.addNode(45);
binaryTreeRecursive.addNode(5);
binaryTreeRecursive.addNode(41);
binaryTreeRecursive.addNode(100);
binaryTreeRecursive.addNode(22);

//fatorial recursivo
//n posso usar loop
//fib.
//prime tb =]
