/* 
    栈数据结构，原则，后进先出
*/

function Stack() {
    this.items = [] // 保存数据
}

// 向栈顶添加元素(数组末尾)
Stack.prototype.push = function(val) {
    this.items.push(val)
}

// 从栈顶移除元素
Stack.prototype.pop = function() {
    return this.items.pop()
}

// 查看栈顶元素

Stack.prototype.peek = function() {
    return this.items[this.items.length - 1]
}

// 查看栈顶元素是否为空
Stack.prototype.isEmpty = function() {
    return this.items.length === 0
}
// 查看栈的长度
Stack.prototype.size = function() {
    return this.items.length
}

// 清空和打印栈元素
Stack.prototype.clear = function() {
    this.items = []
}

// 栈的使用

var myStack = new Stack()

console.log(myStack.isEmpty())
myStack.push(1)
myStack.push(2)
myStack.pop()

// console.log(myStack)
// console.log(myStack.peek())
// console.log(myStack.size())

// 二进制转换
function change(val) {
    var remStack = new Stack(),rem, res = ''
    while (val > 0) {
        rem = Math.floor(val % 2)
        remStack.push(rem)
        val = Math.floor(val / 2)
    }

    while(!remStack.isEmpty()) {
        res += remStack.pop().toString()
    }

    return res
}

console.log(change(10))

// 将十进制改为任意进制转换

function change2(val, num) {
    var myStack = new Stack(), rem, res = '', step = '012345678910ABCDEF'
    while (val > 0) {
        rem = Math.floor(val % num)
        myStack.push(rem)
        val = Math.floor(val / num)
        digits = '0123456789ABCDEF';
    }

    while (!myStack.isEmpty()) {
        res += digits[myStack.pop()]
    }
    return res
}

console.log(change2(453123, 16))