/**
 * 数据类型
 */
// 1.boolean类型
var isDone = true;
//  let createBoolean: boolean = new Boolean(1); 返回一个对象, 不是booolean类型
var createBoolean = Boolean(1);
// 2.数值类型
var num1 = 1;
var num2 = 0xf; // 十六进制
var num3 = 2; //二进制
var num4 = 19; //八进制
var num5 = NaN; //不是一个数字
var num6 = Infinity; //无限大
// 3.字符串类型
var str1 = '你好';
var str2 = '世界';
var str3 = "\u4F60\u597D," + str2;
// 4.空值
var emptyData = undefined;
function alertName() {
    console.log(123);
}
// 5.使用null和undefined定义数据类型
var u = undefined;
var n = null;
// 6.null和undefined是所用类型的子类,可以定义给所有类型
var numberOne = undefined;
var numberTwo = null;
var strOne = undefined;
var strTwo = null;
var boolOne = undefined;
var boolTwo = null;
// 7.void不能赋值给number
/**
 * let uOther: void;
 * let num: number = uOther;
 */
// 8.任意类型, 基本类型无法改变,any可以转换类型,any类型被申明之后,对他的任何操返回值都是any类型;
// 对于创建变量不声明类型的,默认any
var anydata = "saven";
anydata = 666;
// 9.类型推论
var str4 = '你好'; //相当于 let str4: string = '你好'; 所以赋值其他类型数据报错
//  str4 = 7;
// 10.联合类型 可以设置多个类型,但是只能访问所有类型中的共同属性
var str5;
str5 = '你好';
str5 = 666;
var tom = {
    name: 'tom',
    age: 1
};
var lisi = {
    name: '李四'
};
var dog = {
    name: 'dog',
    age: 6,
    weight: '30kg'
};
var liu = {
    id: 12,
    name: 'liu',
    age: 34
};
// liu.id = 13 只读属性不可修改
