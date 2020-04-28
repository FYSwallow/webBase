/**
 * 数据类型
 */

 // 1.boolean类型
 let isDone: boolean = true;

//  let createBoolean: boolean = new Boolean(1); 返回一个对象, 不是booolean类型
let createBoolean: boolean = Boolean(1);

// 2.数值类型
let num1: number = 1;
let num2: number = 0xf; // 十六进制
let num3: number = 0b10; //二进制
let num4: number = 0o23; //八进制
let num5: number = NaN; //不是一个数字
let num6: number = Infinity; //无限大

// 3.字符串类型
let str1: string = '你好';
let str2: string = '世界';
let str3: string = `你好,${str2}`;

// 4.空值
let emptyData: void = undefined;
function alertName(): void {
    console.log(123);
}

// 5.使用null和undefined定义数据类型
let u: undefined = undefined;
let n: null = null;

// 6.null和undefined是所用类型的子类,可以定义给所有类型

let numberOne: number = undefined;
let numberTwo: number = null;
let strOne: string = undefined;
let strTwo: string = null;
let boolOne: boolean = undefined;
let boolTwo: boolean = null;

// 7.void不能赋值给number
/**
 * let uOther: void;
 * let num: number = uOther;
 */

 // 8.任意类型, 基本类型无法改变,any可以转换类型,any类型被申明之后,对他的任何操返回值都是any类型;
 // 对于创建变量不声明类型的,默认any

 let anydata: any = "saven";
 anydata = 666;

 // 9.类型推论
 let str4 = '你好'; //相当于 let str4: string = '你好'; 所以赋值其他类型数据报错
//  str4 = 7;

// 10.联合类型 可以设置多个类型,但是只能访问所有类型中的共同属性

let str5: string | number;
str5 = '你好';
str5 = 666;

// function getLength(str: string | number) {
//     return str.length;  由于length 不是string和number数据类型的共同属性,所以会报错
// }

// 11. 接口类型, 接口类型首字母大写

interface Person {
    name: string;
    age: number;
}

let tom: Person = {
    name: 'tom',
    age: 1
}

/*
    // 定义的变量不能比定义的接口属性少,也不能多
    let wangWu: Person ={
        name: 'tom' 
    }
 */

// 可定义一些可选属性

interface Student {
    name: string;
    age?: number // 可以有也可以没有
}

let lisi: Student = {
    name: '李四'
}

// 接口提供一个任意属性,
interface Animal {
    name: string;
    age?: number;
    [propName: string]: string | number; // 必须包括该接口下所有属性的数据类型
}

let dog: Animal = {
    name: 'dog',
    age: 6,
    weight: '30kg'
}

// 只读属性

interface Teacher {
    readonly id: number;
    name: string;
    age: number;
}

let liu: Teacher = {
    id: 12,
    name: 'liu',
    age: 34
}

// liu.id = 13 只读属性不可修改