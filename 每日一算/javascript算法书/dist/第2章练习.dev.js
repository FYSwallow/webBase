"use strict";

/**
 * 创建一个记录学生成绩的对象中,提供一个添加成绩的方法,以及一个显示学生平均成绩的方法
 */
function Student() {
  this.grade = [];
} // 添加成绩


Student.prototype.addGrade = function (grade) {
  this.grade.push(grade);
}; // 求平均数据


Student.prototype.averageGrade = function () {
  var total = 0;

  for (var i = 0; i < this.grade.length; i++) {
    total += this.grade[i];
  }

  return total / this.grade.length;
};

var xiaoMing = new Student();
xiaoMing.addGrade(65);
xiaoMing.addGrade(78);
xiaoMing.addGrade(67);
xiaoMing.addGrade(34);
xiaoMing.addGrade(98);
xiaoMing.addGrade(97);
xiaoMing.addGrade(76);
console.log(xiaoMing.averageGrade());
/**
 * 将一组单词储存在一个数组中,并按照正序和倒叙显示,
 */

var arr = ['早晨', '中午', '晚上', '凌晨', '天亮', '天黑'];
var arr1 = arr.sort();
var arr2 = arr.sort().reverse();
console.log(arr1);
console.log(arr2);
/**
 * 创建一个对象,用于保存和观测天气
 */