"use strict";

/**
 * 二叉树 
 */
// 实现二叉树节点对象
function Node(data, left, right) {
  this.data = data;
  this.left = left;
  this.right = right;
}

Node.prototype.show = function () {
  return this.data;
}; // 二叉树对象


function Bst() {
  this.root = null;
}

Bst.prototype.insert = function (data) {
  var n = new Node(data, null, null);

  if (this.root === null) {
    this.root = n;
  } else {
    var cur = this.root;
    var parent;

    while (true) {
      parent = cur;

      if (data < cur.data) {
        cur = cur.left;

        if (cur == null) {
          parent.left = n;
          break;
        }
      } else {
        cur = cur.right;

        if (cur === null) {
          parent.right = n;
          break;
        }
      }
    }
  }
}; // 中序


Bst.prototype.inOrder = function (node) {
  if (!(node === null)) {
    this.inOrder(node.left);
    console.log(node.show());
    this.inOrder(node.right);
  }
}; // 先序


Bst.prototype.preOrder = function (node) {
  if (!(node === null)) {
    console.log(node.show());
    this.inOrder(node.left);
    this.inOrder(node.right);
  }
}; // 后序


Bst.prototype.preOrder = function (node) {
  if (!(node === null)) {
    this.inOrder(node.left);
    this.inOrder(node.right);
    console.log(node.show());
  }
}; // 查找最小值


Bst.prototype.getMin = function () {
  var cur = this.root;

  while (!(cur.left == null)) {
    cur = cur.left;
  }

  return cur.data;
}; // 查找最大值


Bst.prototype.getMax = function () {
  var cur = this.root;

  while (!(cur.right === null)) {
    cur = cur.right;
  }

  return cur.data;
}; // 查找定值


Bst.prototype.find = function (data) {
  var cur = this.root;

  while (!(cur == null)) {
    if (cur.data = data) {
      return cur;
    } else if (cur.data < data) {
      cur = cur.left;
    } else {
      cur = cur.right;
    }
  }

  return null;
}; // 移除节点


Bst.prototype.remove = function (node, data) {
  if (node === null) {
    return null;
  }

  if (data == node.data) {}
};

var bst = new Bst();
bst.insert(34);
bst.insert(23);
bst.insert(45);
bst.insert(14);
bst.insert(57);
bst.insert(5);
bst.inOrder(bst.root);
bst.preOrder(bst.root);
console.log('最大值' + bst.getMax());
console.log(bst.find(57));