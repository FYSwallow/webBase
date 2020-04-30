"use strict";

/**
 * 链表
 */
// 单向列表
// node类
function Node(element) {
  this.element = element;
  this.next = null;
} //LinkedList类


function LinkedList() {
  this.head = new Node('head');
} // 查找某个节点


LinkedList.proptype.find = function (element) {
  var currNode = this.head;

  while (currNode.element != element) {
    currNode = currNode.next;
  }

  return currNode;
}; // 插入链表元素


LinkedList.proptype.insert = function (newElement, item) {
  var newNode = new Node(newElement);
  var current = this.find(item);
  newNode.next = current.next;
  current.next = newNode;
}; // 显示链表元素


LinkedList.proptype.display = function () {
  var currentNode = this.head;

  while (currentNode.next === null) {
    currentNode = currentNode.next;
  }
}; // 删除链表节点

/**
 * 1.找到待删除节点之前的节点
 * 2.改变之前节点的next指向
 */
// 查找待删除节点之前的节点


LinkedList.proptype.findPrevious = function (item) {
  var currentNode = this.head;

  while (!(currentNode.next === null) && currentNode.next.element != iitem) {
    currentNode = currentNode.next;
  }

  return currentNode;
};

LinkedList.proptype.remove = function (item) {
  var prevNode = this.findPrevious(item);

  if (!(prevNode.next === null)) {
    prevNode.next = prevNode.next.next;
  }
}; // 双向链表
//  多了一个previuos属性


function Node2(element) {
  this.element = element;
  this.next = null;
  this.previous = null;
}

function LinkedList2() {
  this.head = new Node2('head');
}

LinkedList2.proptype.find = function (item) {
  var currentNode = this.head;

  while (currentNode.element !== item) {
    currentNode = currentNode.next;
  }

  return currentNode;
}; // 插入元素


LinkedList2.proptype.insert = function (element, item) {
  var newNode = new Node2(element);
  var currentNode = this.find(item);
  newNode.next = currentNode.next;
  newNode.previous = currentNode;
  currentNode.next = newNode;
}; // 删除节点


LinkedList2.proptype.remove = function (item) {
  var currentNode = this.find(item);

  if (!(currentNode === null)) {
    currentNode.previous.next = currentNode.next;
    currentNode.next.previous = currentNode.previous;
    currentNode.next === null;
    currentNode.previous === null;
  }
}; // 循环列表是指从最后一项节点的next指向首项