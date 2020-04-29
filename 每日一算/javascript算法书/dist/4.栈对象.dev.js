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
}; //返回栈顶元素, 并将top值减一


Stack.prototype.pop = function () {
  return this.dataStore[--this.top];
}; // 栈内有多少个元素


Stack.prototype.length = function () {
  return this.top;
}; // 返回栈顶元素


Stack.prototype.peek = function () {
  return this.dataStore[this.top - 1];
};

Stack.prototype.clear = function () {
  return this.top = 0;
}; // 使用栈实现数制件间的相互转换


function changeNumber(num, base) {
  var s = new Stack();

  do {
    s.push(num % base);
    num = Math.floor(num / base);
  } while (num > 0);

  var result = "";

  while (s.length() > 0) {
    result += s.pop();
  }

  return result;
} // 判定字符串是否回文


function isReserve(word) {
  var s = new Stack();

  for (var i = 0; i < word.length; i++) {
    s.push(word[i]);
  }

  var rword = '';

  while (s.length() > 0) {
    rword += s.pop();
  }

  if (word === rword) {
    return true;
  } else {
    return false;
  }
}

console.log(isReserve('12312'));
console.log(isReserve('12321')); // 用栈模拟递归

function fact(n) {
  var s = new Stack();

  while (n > 1) {
    s.push(n--);
  }

  var result = 1;

  while (s.length() > 0) {
    result *= s.pop();
  }

  return result;
}

console.log(fact(5)); // 使用栈对象判断一个算数表达式是否匹配

function isComplete(str) {
  var s = new Stack();

  for (var i = 0; i < str.length; i++) {
    if (str[i] === '(') {
      s.push('(');
    } else if (str[i] === ')') {
      if (s.length() > 0) {
        s.pop();
      }
    }
  }

  ;
  return s.length = 0 ? '匹配' : '不匹配';
}

console.log(isComplete('2.3 + 23 / 12 + 3.14159( * 0.24')); // 算数表达式转换为后缀表达式

function func2(str) {
  var s1 = new Stack();
  var s2 = new Stack();

  for (var i = 0; i < str.length; i++) {
    if (str[i] !== ')') {
      if (/[0-9]/.test(str[i])) {
        s1.push(str[i]);
      } else {
        s2.push(str[i]);
      }
    } else {
      s1.push(s2.pop());
      s2.pop();
    }

    console.log('s1', s1.dataStore);
    console.log('s2', s2.dataStore);
  }

  s1.push(s2.pop());
  return s1.dataStore.toString();
}

console.log(func2('(3+4)×5-6'));