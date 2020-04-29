"use strict";

function SuperClass() {
  this.superValue = true;
}

SuperClass.prototype.getSuperValue = function () {
  return true;
};

function SubClass() {
  this.subValue = false;
}

SubClass.proptype = new SuperClass();

SubClass.proptype.getSubValue = function () {
  return false;
};

var child = new SubClass();
console.dir(SubClass);
console.dir(SuperClass);
console.log(child.getSubValue);