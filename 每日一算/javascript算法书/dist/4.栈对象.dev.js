"use strict";

/**
 * 栈对实现
 */
function Stack() {
  this.dataStore = [];
  this.top = 0; // 表示栈顶
} // 进栈


Stack.prototype.push = function (element) {
  this.dataStore[this.top++] = element;
}; //返回栈顶元素


Stack.prototype.pop = function (element) {
  return this.dataStore[--this.pop];
};