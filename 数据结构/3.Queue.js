/* 队列, 先进先出，后进后厨 */
function Queue() {
    this.items = []
}

// 添加任务
Queue.prototype.enqueue = function(val) {
    return this.items.push(val)
}
//移除任务
Queue.prototype.dequeue = function(val) {
    return this.items.shift()
}

// 查看第一个任务
Queue.prototype.front = function() {
    return this.items[0]
}

// 检查队列是否为空
Queue.prototype.isEmpty = function() {
    return this.items.length === 0
}

// 查看队列长度

Queue.prototype.size = function() {
    return this.items.length
}

// 查看队列任务
Queue.prototype.print = function() {
    return this.items.toString()
}


console.log([1,2,[3, [4]]].toString()) // 1, 2, 3, 4 可以将数据数据平铺为一个字符串类型

// 使用
let myQueue = new Queue()
console.log(myQueue.isEmpty()) // 判断是否为空 true

// 添加元素
myQueue.enqueue(1)
myQueue.enqueue(2)
console.log(myQueue.size())


// 优先队列
function PriorityQueue() {
    this.items = []
}

//  队列元素
function QueueElement(element, priority) {
    this.element = element
    this.priority = priority
}

PriorityQueue.prototype.enqueue = function(element, priority) {
    let queueElement = new QueueElement(element, priority)

    let added = false
    for (let i = 0; i < this.items.length; i++) {
        // 优先级高的进行插队
        if (queueElement.priority > this.items[i].priority) {
            this.items.splice(i, 0, queueElement)
            added = true
            break
        }
    }
    if (!added) {
        this.items.push(queueElement)
    }
}

let myPriorityQueue = new PriorityQueue()
myPriorityQueue.enqueue(3, 1)
myPriorityQueue.enqueue(4, 1)
myPriorityQueue.enqueue(5, 2)
myPriorityQueue.enqueue(6, 1)

console.log(myPriorityQueue.items)
/* 
    [
        QueueElement { element: 5, priority: 2 },
        QueueElement { element: 3, priority: 1 },
        QueueElement { element: 4, priority: 1 },
        QueueElement { element: 6, priority: 1 }
    ]

*/

//  循环队列（击鼓传花）

function hotPotato(list, num) {
    let queue = new Queue()
    // 将名字全部添加到队列中区
    for (let i = 0; i < list.length; i++) {
        queue.enqueue(list[i])
    }

    // 每次删除的任务
    let del = ''
    while (queue.size() > 1) {
        for (let i = 0; i < num; i++) {
            queue.enqueue(queue.dequeue()) // 将小于num的元素添加到最后
        }
        // 当传到第num个元素的时候，会被淘汰
        del = queue.dequeue()
        console.log(del + '被淘汰')
    } 
    
    return queue.dequeue()
}

console.log(hotPotato(['小明', '小李1', '小李2', '小李3', '小李4', '小李5', '小李6'], 7))

