/* 链表 */

let Node = function (element) {
    this.element = element
    this.next = null
} // 链表元素

function LinkedList() {
    this.length = 0 // 链表长度
    this.head = null // 第一个节点的引用
}

LinkedList.prototype.append = function (element) {
    // 向链表末尾添加一个元素
    let node = new Node(element), current

    if (this.head == null) {
        this.head = node
    } else {
        current = this.head

        // 找到
        while (current.next) {
            current = current.next
        }

        current.next = node
    }

    this.length++
}

let list = new LinkedList()
list.append(1)
list.append(5)
list.append(6)

// 链表中移除元素

LinkedList.prototype.removeAt = function (position) {
    if (position > -1 && position < this.length) {
        let current = this.head, previous, index = 0

        //移除第一项
        if (position === 0) {
            this.head = current.next
        } else {
            while (index++ < position) {  // a++ 先比较大小，后赋值
                previous = current
                current = current.next
            }
            previous.next = current.next // 将前一项的引用与当前项的next相关联
        }
        this.length--
    } else {
        return null
    }
}

list.removeAt(1)

// 插入元素
LinkedList.prototype.insert = function (position, element) {
    if (position >= 0 && position <= this.length) {
        let node = new Node(element), current = this.head, previous, index = 0

        // 在第一个位置添加
        if (position === 0) {
            node.next = this.head
            this.head = node
        } else {
            while (index++ < position) {
                previous = current
                current = current.next
            }
            node.next = current
            previous.next = node
        }
        this.length++
        return true
    } else {
        return false
    }
}

list.insert(1, '插入')

// toString方法
LinkedList.prototype.toString = function () {
    let current = this.head, string = ''
    while (current) {
        string += current.element + (current.next ? '\n' : '')
        current = current.next
    }
    return string
}

// indexOf方法
LinkedList.prototype.indexOf = function (element) {
    let current = this.head, index = -1

    while (current) {
        if (current.element === element) {
            return ++index
        }
        current = current.next
    }
    return -1
}

console.log(list.toString())
console.log(list.indexOf(6))

// 移除元素
LinkedList.prototype.remove = function (element) {
    let index = this.indexOf(element)
    return this.removeAt(index)
}

// 判断是否为空
LinkedList.prototype.isEmpty = function () {
    return this.length === 0
}

// 返回链表长度
LinkedList.prototype.size = function () {
    return this.length
}

// 获取第一个元素
LinkedList.prototype.getHead = function () {
    return this.head
}



// 双向链表

function DoubleLinkedList() {
    this.head = null
    this.length = 0
    this.tail = null // 新增属性
}

function DoubleNode(element) {
    this.element = element
    this.next = null
    this.prev = null // 新增属性
}

DoubleLinkedList.prototype.insert = function (position, element) {

    // 检查临界值
    if (position > -1 && position < this.length) {
        let node = new DoubleNode(element), current = this.head, previous, index

        if (position === 0) {
            if (!this.head) {
                this.head = node
                this.tail = node
            } else {
                node.next = current
                current.prev = node
                this.head = node
            }
        } else if (position === length) {
            current = this.tail
            current.next = node
            node.prev = current
            this.tail = node
        } else {
            while (index++ < position) {
                previous = current
                current = current.next
            }
            node.next = current
            previous.next = node

            current.prev = node
            node.prev = previous
        }

        this.length++
        return true
    }else {
        return false
    }
}

// 从任意位置删除元素
DoubleLinkedList.prototype.removeAt = function (position) {
    if (position > -1 && position < this.length) {
        let current = this.head, previous, index = 0

        // 移除第一项
        if (position === 0) {
            this.head = current.next
            if (this.length === 1) {
                this.tail = null
            } else {
                this.head.prev = null
            }
        } else if (position === this.length) {
            current = this.tail
            this.tail = current.prev
            this.tail.next = null
            
        } else {
            while(index++ < position) {
                previous = current
                current = current.next
            }

            previous.next = current.next
            current.next.prev = previous
        }

        this.length --
        return current.element
    } else {
        return null;
    }
}

let list2 = new DoubleLinkedList()
list2.insert(0, '1')
list2.insert(1, '2')
list2.insert(2, '3')
console.log(list2)