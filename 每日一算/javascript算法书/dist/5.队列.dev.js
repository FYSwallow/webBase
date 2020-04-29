"use strict";

/**
 * 队列
 */
function Queue() {
  this.dataStore = [];
} // 向队尾插入一个元素


Queue.prototype.enqueue = function (element) {
  this.dataStore.push(element);
}; // 删除队首的元素


Queue.proptype.unenqueue = function (element) {
  this.dataStore.shift();
}; // 读取队首和队尾的元素


Queue.proptype.front = function () {
  return this.dataStore[0];
};

Queue.proptype.back = function () {
  return this.dataStore[this.dataStore.length - 1];
}; // 显示队列中的所有元素


Queue.prooptype.toString = function () {
  var result = '';

  for (var i = 0; i < this.dataStore.length; i++) {
    result += this.dataStore[i] + '\n';
  }

  return result;
}; // 判断队列是否为空


Queue.proptype.empty = function () {
  if (this.dataStore.length === 0) {
    return true;
  }

  return false;
};