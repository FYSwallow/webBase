"use strict";

/**
 * 实现一个列表
 */
function List() {
  this.dataStore = []; // 列表中的元素

  this.listSize = 0; // 列表的元素个数

  this.pos = 0; // 列表的当前位置
} // 添加列表中的元素


List.prototype.add = function (element) {
  this.dataStore[this.listSize++] = element;
}; // 查找元素的位置


List.prototype.find = function (element) {
  for (var i = 0; i < this.dataStore.length; i++) {
    if (element === this.dataStore[i]) {
      return i;
    }
  }

  return -1;
}; // 删除列表中的元素


List.prototype.remove = function (element) {
  var index = this.find(element);

  if (index > -1) {
    this.dataStore.splice(index, 1);
    this.listSize--;
    return true;
  }

  return false;
}; // 清空列表中的元素


List.prototype.clear = function () {
  this.dataStore = [];
  this.listSize = 0;
}; // 显示列表中的元素


List.prototype.toString = function () {
  return this.dataStore;
}; // 插入一个元素


List.prototype.insert = function (element, after) {
  var index = this.find(after);

  if (index > -1) {
    this.dataStore.splice(index + 1, 0, element);
    this.listSize++;
    return true;
  }

  return false;
}; // 判断是否含有一个定值


function contains(element) {
  for (var i = 0; i < this.dataStore.length; i++) {
    if (this.dataStore[i] === element) {
      return true;
    }
  }

  return false;
} // 遍历列表


List.prototype.front = function () {
  this.pos = 0;
};

List.prototype.end = function () {
  this.pos = this.listSize - 1;
};

List.prototype.prev = function () {
  if (this.pos > 0) {
    --this.pos;
  }
};

List.prototype.next = function () {
  if (this.pos < this.listSize - 1) {
    ++this.pos;
  }
};

List.prototype.currPos = function () {
  return this.pos;
};

List.prototype.moveTo = function (position) {
  this.pos = position;
};

List.prototype.getElement = function () {
  return this.dataStore[this.pos];
};

var names = new List();
names.add("早晨");
names.add("中午");
names.add("下午");
names.add("晚上");
names.add("凌晨");
names.front();
console.log(names.getElement());
names.next();
console.log(names.getElement());