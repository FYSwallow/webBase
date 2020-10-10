
// 1. 数据前面不会默认加;

/* console.log("你好");
[1, 2].forEach((value) => {
    console.log(value)
}) */ // 会报错


console.log("你好");
[1, 2].forEach((value) => {
    console.log(value)
}) // 加分号不会报错

// Number类型的数据应小于2^53 - 1 大于 -(2^53 - 1)

// Number数字类型转换规则

/* undefinde ---> NaN
null      ---> 0
true || false ---> 1 || 0
string ---> 当字符串中含有字符存在时,会返回NaN,如果长度为0,会返回0 */

let a1;
let a2 = null;
let a3 = true;
let a4 = "1234as";
console.log(Number(a1))
console.log(Number(a2))
console.log(Number(a3))
console.log(Number(a4))

//  Boolean类型转换

let b1 = 1
let b2 = 0
let b3 = "qerqw"
let b4 = ""

console.log(Boolean(b1))
console.log(Boolean(b2))
console.log(Boolean(b3))
console.log(Boolean(b4))

// 基本运算符

// ** 求幂运算符

console.log(2 ** 3)