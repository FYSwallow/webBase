// Array.of 将参数转化为数组中的一项, 返回一个数据

console.log(Array.of(8.0)) //[8]
console.log(Array(8.0)) //[empty * 8]

console.log(Array(8.0, 5.0)) // [8, 5]

// Array.from 将一个类似数组的可迭代对象转化为一个数组

// Array.from(迭代器的对象，加工函数(value, index), 加工函数this指向)

const obj = { 0: 1, 2: 2, 3: 3, length: 3 }
console.log(
    Array.from(obj, (value, index) => {
        return value
    }, obj)
)


var obj2 = { 0: 'a', 1: 'b', 2: 'c', length: 3 };
console.log(
    Array.from(obj2, function (value, index) {
        console.log(value, index, this, arguments.length);
        return value.repeat(3); //必须指定返回值，否则返回undefined
    }, obj2)
)

console.log(Array.from('abc')) // ["a", "b", "c"]
console.dir(Array.prototype)

console.log(["a", "b", "c"].join(''))