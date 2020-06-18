/**
 * 数组的解构赋值
 */

 {
    let [a, b , c] = [1, 2, 3]
    console.log(a, b, c)
 }

 //按照对应位置进行取值
 {
    let [a, b, [c]] = [1, 2, [3]]
    console.log(a, b, c)
 }

 