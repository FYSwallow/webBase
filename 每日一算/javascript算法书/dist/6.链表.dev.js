"use strict";

/**
 * 链表
 */
// node类
function Node(element) {
  this.element = element;
  this.next = null;
} //LinkedList类


function LinkedList() {
  this.head = new Node('head');
}

LinkedList.proptype.find = function (element) {
  var currNode = this.head;

  while (currNode.element != element) {
    currNode = currNode.next;
  }

  return currNode;
};

LinkedList.proptype.insert = function (newElement, item) {
  var newNode = new Node(newElement);
  var current = this.find(item);
  newNode.next = current.next();
  current.next = newNode;
};