// 函数柯力化

function init(x) {
    return function (y) {
        return x + y
    }
}

console.log(init(1)(2))