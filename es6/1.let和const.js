/**
 * let 和const 命令
 */

 {
     let a = 1
     console.log(a) //1, ,let 声明的变量只在当前代码块中有效
 }

//  console.log(a) 报错

 {
     var b = 2
 }
 console.log(b) // var 在全局作用域中生效

 // 使用var
 var c = [];
 for (var i = 0; i < 10; i++) {
     c[i] = function() {
         console.log(i)
     } 
 }
c[6]() // 10, i是全局作用域下的,i始终指向一个i,所以循环结束后i的值为1

// 使用let
var  d= [];
 for (let i = 0; i < 10; i++) {
     d[i] = function() {
         console.log(i)
     } 
 }
d[6]()// 6

// 使用闭包得到相同的结果
var e = [];
for (var i = 0; i < 10; i++) {
    e[i] = function(x) {
        return function () {
            console.log(x)
        }
    }(i)
}
e[6]()

// let 不存在变量提升,不能在声明之前调用
// console.log(f); // 报错
// let f = f; // 报错 f声明执行语句执行完成之前不能调用
let f = 2;
console.log(g); //undefined
var g = 2;



// 暂时性死区(只要一进入代码块,所有使用的变量已经存在了,但是不可获取,只有声明结束后才能使用)

var h = 1;

if (true) {
    // h = 2; // 如果在代码块之前申明了变量,又在一个代码块中声明了同一个变量,则不能再代码块中声明之前赋值,如果赋值,会报错
    // typeof h; // 也会报错
    let h;
    h = 2;
}


// 不能重复声明
// {
//     let i = 1;
//     let i = 2;
// }

// const 声明的是常量,一旦声明,不可改变,对于引用类型来说是地址值不可改变

const j = 10;
// j = 11; // 报错

const k = {name: '张珊'}
k.name = "王五"