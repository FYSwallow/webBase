/* 集合 */

function MySet() {
    this.items = {}
}

// has(in 判断对象中是否有这个键，数组中，判断是否有这个值)
MySet.prototype.has = function(element) {
    return element in this.items 
}

MySet.prototype.has2 = function(element) {
    return this.items.hasOwnPrototype(element) 
}

// 添加元素
MySet.prototype.add = function(value) {
    if(!this.has(value)) {
        this.items[value] = value 
        return true
    }
    return false
}

// 移除元素
MySet.prototype.remove = function(element) {
    if(this.has(element)) {
        delete this.items[element]
        return true
    }
    return false
}

// 清空集合
MySet.prototype.clear = function() {
    this.items = {}
    return true
}

// 集合长度
MySet.prototype.size = function() {
    return Object.keys(this.items).length
}

// 将集合转换为数组，提取出来
MySet.prototype.value = function() {
    let values = []
    for (const key in this.items) {
        if (this.items.hasOwnProperty(key)) {
            values.push(this.items[key])
        }
    }
    return values
}

// 求并集

MySet.prototype.union = function(otherSet) {
    let unionSet = new MySet() // 结果

    let values = this.value()
    for (let i = 0; i < values.length; i++) {
        unionSet.add(values[i])
    }

    values = otherSet.value()
    for (let i = 0; i < values.length; i++) {
        unionSet.add(values[i])
    }

    return unionSet
}

// 交集
MySet.prototype.intersection = function(otherSet) {
    var intersectionSet = new MySet()

    let values = this.value()
    for (let i = 0; i < values.length; i++) {
        if (otherSet.has(values[i])) {
            intersectionSet.add(values[i])
        }
    }
    return intersectionSet
}

// 差集
MySet.prototype.difference = function(otherSet) {
    let differenceSet = new MySet()

    let values = this.value()
    for (let i = 0; i < values.length; i++) {
        if (otherSet.has(values[i])) {
            differenceSet.remove(values[i])
        }
    }
    return differenceSet
}

// 子集，包含关系

MySet.prototype.subSet = function(otherSet) {
    if (this.size() > otherSet.value() ) {
        return false
    } else {
        let values = this.value()
        for (let i = 0; i < values.length; i++) {
            if(!otherSet.has(values[i])){
                return false
            }
        }
        return true
    }
}

let mySet = new MySet()
mySet.add(1)
mySet.add(2)
mySet.add(3)
mySet.remove(2)

let mySet2 = new MySet()
mySet2.add(1)
mySet2.add(2)
mySet2.add(3)
console.log(mySet.subSet(mySet2))

// ES6
const set = new Set([1, 2, 3, 4, 5])
set.add(7)
set.add(3)
set.delete(1)
console.log(set.has(2))
console.log(set)

// 数组去重
function deduqe(array) {
    return Array.from(new set(array))
}

// 并集
let union = (a, b) => new Set([...a, ...b])

// 交集
let intersect =(a, b) => new Set([...a].filter(x => b.has(x)))

// 差集
let difference = (a, b) => new Set([...a].filter(x => !b.has(x)))

let a = new Set([1, 2, 3]);
let b = new Set([4, 3, 2]);

console.log(union(a, b))
console.log(intersect(a, b))
console.log(difference(a, b))