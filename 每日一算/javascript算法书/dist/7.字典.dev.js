"use strict";

/**
 * 字典类
 */
function Dictionary() {
  this.datastore = new Array();
} // 增加


Dictionary.prototype.add = function (key, value) {
  this.datastore[key] = value;
}; // 发现


Dictionary.prototype.find = function (key) {
  return this.datastore[key];
};

var dic = new Dictionary();
dic.add('name', 'wangwu');
console.log(dic.find('name')); // 删除键值对

Dictionary.prototype.remove = function (key) {
  delete this.datastore[key];
}; // 显示所有的键值对


Dictionary.prototype.show = function () {
  for (var key in object.keys(this.datastore)) {
    console.log(key + '-----' + this.datastore[key]);
  }
};