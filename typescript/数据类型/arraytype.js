/**
 * 数组类型
*/
var arr1 = [1, 2, 3, 4, 5]; // 只能为number类型
// arr1.push('1') 
var arr2 = [1, 2, 3, 4, 5];
var arr3 = [1, 2, 3, 4, 5];
/**
 * 定义函数
 */
//  1. 函数申明
function sum(x, y) {
    return x + y;
}
sum(1, 2); // 无法使用多余或少于的参数个数
// 函数表达式
var sum1 = function (x, y) {
    return x + y;
};
// 使用?表示可选的参数, 可选参数必须放在最后,可以使用默认值代表可选参数
function bulidName(lastName, firstName, name) {
    if (name === void 0) { name = ''; }
    if (firstName) {
        return firstName + lastName;
    }
    else {
        return lastName;
    }
}
bulidName('tom');
// 使用剩余参数
function add(arr1) {
    var items = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        items[_i - 1] = arguments[_i];
    }
}
function reload(x, y) {
    if (typeof y === 'number') {
        return x + y;
    }
    else {
        return x + y;
    }
}
console.log(reload(1, 1));
console.log(reload(1, '王'));
