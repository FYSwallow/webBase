/**
 * 链表
 */

 // 单向列表
// node类
function Node(element) {
    this.element = element;
    this.next = null;
}

//LinkedList类
function LinkedList() {
    this.head = new Node('head');
}
// 查找某个节点
LinkedList.proptype.find = function (element) {
    let currNode = this.head;
    while(currNode.element != element) {
        currNode = currNode.next;
    }
    return currNode;
}

// 插入链表元素
LinkedList.proptype.insert = function (newElement, item) {
    let newNode = new Node(newElement);
    let current = this.find(item);
    newNode.next = current.next();
    current.next = newNode;
}

// 显示链表元素
LinkedList.proptype.display = function() {
    let currentNode = this.head;
    while(currentNode.next === null) {
        console.log(currentNode.next)
        currentNode = currentNode.next;
    }
}

// 删除链表节点
/**
 * 1.找到待删除节点之前的节点
 * 2.改变之前节点的next指向
 */
// 查找待删除节点之前的节点
 LinkedList.proptype.findPrevious = function (item) {
    ler currentNode = this.head;
    while(!(currentNode.next === null) && (currentNode.next.element != iitem)) {
        currentNode = currentNode.next;
    }
    return currentNode;
 }

 LinkedList.proptype.remove = function (item) {
    let prevNode = this.findPrevious(item);
    if (!(prevNode.next === null)) {
        prevNode.next = prevNode.next.next
    }
 }

 // 双向链表

//  多了一个previuos属性
function Node2 (element) {
    this.element = element;
    this.next = null;
    this.previous = null;
}

function LinkedList2() {
    this.head = new Node2('head');
}

LinkedList2.proptype.find = function(item) {
    let currentNode = this.head;
    while(currentNode.element !== item) {
        currentNode = currentNode.next;
    }
    return currentNode
}

// 插入元素
LinkedList2.proptype.insert = function(element, item) {
    let newNode = new Node2(newElement)
}