// 二叉树

function Node(key) {
    this.key = key
    this.left = null
    this.right = null
}

function BinarySearchTree() {
    this.root = null
}

// 插入键
BinarySearchTree.prototype.insert = function(key) {
    var node = new Node(key)

    if(this.root === null) {
        this.root = node
    } else {
        insertNode(this.root, node)
    }
}
function insertNode(node, newNode) {
    if (newNode.key < node.key) {
        if (node.left === null) {
            node.left = newNode
        } else {
            insertNode(node.left, newNode)
        }
    } else {
        if (node.right === null) {
            node.right = newNode
        } else {
            insertNode(node.right, newNode)
        }
    }
}

// 中序遍历
BinarySearchTree.prototype.inOrderTraverse = function(func) {
    inOrderTraverseNode(this.root, func);
}

function inOrderTraverseNode(node, func) {
    if (node !== null) {
        inOrderTraverseNode(node.left, func)
        func(node.key)
        inOrderTraverseNode(node.right, func)
    }
}

// 先序遍历
BinarySearchTree.prototype.preOrderTraverse = function(func) {
    preOrderTraverseNode(this.root, func)
}

function preOrderTraverseNode(node, func) {
    if (node !== null) {
        func(node.key)
        preOrderTraverseNode(node.left, func)
        preOrderTraverseNode(node.right, func)
    }
}

// 后序遍历
BinarySearchTree.prototype.nextOrderTraverse = function(func) {
    nextOrderTraverseNode(this.root, func)
}

function nextOrderTraverseNode(node, func) {
    if (node !== null) {
        nextOrderTraverseNode(node.left, func)
        nextOrderTraverseNode(node.right, func)
        func(node.key)
    }
}

function printNode(value) {
    console.log(value)
}

// 查看最小值
BinarySearchTree.prototype.min = function() {
    return minNode(this.root)
}

function minNode(node) {
    if (node) {
        while(node.left !== null) {
            node = node.left
        }
        return node.key
    }
    return null
}

// 查看最大值
BinarySearchTree.prototype.max = function() {
    return maxNode(this.root)
}

function maxNode(node) {
    if (node) {
        while(node.right !== null) {
            node = node.right
        }
        return node.key
    }
    return null
}

// 查看一个特定得值
BinarySearchTree.prototype.search = function(key) {
    return searchNode(this.root, key)
}

function searchNode(node, key) {
    if (node === null) {
        return false
    }

    if (key < node.key) {
        return searchNode(node.left)
    } else if(key > node.key) {
        return searchNode(node.right)
    } else {
        return true
    }
}

// 移除一个节点
BinarySearchTree.prototype.remove = function(key) {
    this.node = removeNode(this.node, key)
}

function removeNode(node, key) {
    if (node === null) {
        return null
    }

    if (key < node.key) {
        node.left = removeNode(node.left, key)
        return node
    } else if (key > node.key) {
        node.right = removeNode(node.right, key)
        return node
    } else {
        // 只有一个叶节点
        if (node.left === null && node.right === null) {
            node = null
            return node
        }

        // 有一个子节点
        if (node.left === null && node.right !==null) {
            node = node.right
            return node
        } else if (node.right === null) {
            node = node.left
            return node
        }

        // 有两个子节点,需要将该节点右侧的最小节点替换到此节点位置, 并将node右侧原有最小节点移除
        var aux = finMinNode(node.right)
        node.key = aux.key
        node.right = removeNode(node.right, aux.key)
        return node

    }
}

function finMinNode(node) {
    while(node && node.left !== null) {
        node = node.left
    }
    return node
}

var tree = new BinarySearchTree();
tree.insert(7); 
tree.insert(15); 
tree.insert(5); 
tree.insert(3); 
tree.insert(9); 
tree.insert(8); 
tree.insert(10); 
tree.insert(13); 
tree.insert(12); 
tree.insert(14); 
tree.insert(20); 
tree.insert(18); 
tree.insert(25);

tree.inOrderTraverse(printNode)
tree.preOrderTraverse(printNode)
tree.nextOrderTraverse(printNode)
console.log(tree.min())
console.log(tree.max())