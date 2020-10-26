/* 链表 */

let Node = function(element) {
    this.element = element
    this.next = null
} // 链表元素

function LinkedList() {
    this.defaultNode = null // 默认节点
    this.length = 0 // 链表长度
    this.head = null // 第一个节点的引用
}

LinkedList.prototype.append = function(element) {
    // 向链表末尾添加一个元素
    let node = new Node(element), current
    
    if (this.head == null) {
        this.head = node
        this.defaultNode = node
    } else {
        current = this.defaultNode

        // 找到
        while(current.next) {
            current = current.next
        }

        current.next = node
    }

    this.length ++ 
}

let list = new LinkedList()
list.append(1)
list.append(5)
console.log(list)


