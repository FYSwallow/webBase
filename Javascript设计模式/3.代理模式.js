/**
 * 代理模式: 为一个对象提供一个代用品或占位符，以便控制对它的访问
 */

// 当对一个对象进行访问操作时,实际是对替身对象的访问,只有对对象进行操作时,进行的才是本体对象
//模式: 保护代理、虚拟代理、缓存代理


//案例: 让人买衣服

// 定义一个代理对象,将所有的判断操作交给代理对象,保护代理对象
var proxy = {
    init: function(price) {
        if (price > 300) {
            this.reject(price)
        }else {
            this.received(price)
        }
    },
    received: function(price) {
        target.received(price)
    },
    reject: function(price) {
        target.reject(price)
    }
}

var target = {
    received: function(price) {
        console.log(`买了${price}元的水果`)
    },
    reject: function(price) {
        console.log(`拒绝了${price}元的水果`)
    }
}

proxy.init(300)

// 虚拟代理,图片懒加载

// 缓存乘法
function mult() {
    let arr = [].slice.call(arguments);
    return arr.reduce((a, b) => {
        return a*b
    })
}

// 缓存代理,将运算过的数据全部缓存起来
const proxyMult = (function() {
    let cache = {};
    return function() {
        let tag = [].join.call(arguments, ',')

        if (cache[tag]) {
            return cache[tag]
        } else {
            return cache[tag] = mult.apply(this, arguments)
        }
    }
})()
console.log(mult(1, 3, 4))
console.log(mult(1, 3, 4))
console.log(proxyMult(1, 3, 4))
console.log(proxyMult(1, 3, 4))
console.log(proxyMult(1, 3, 4, 5))