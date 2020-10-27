// 字典和散列

function Dictionary() {
    this.items = {}
}

// 判断这个字典中是否存在这个键
Dictionary.prototype.has = function(key) {
    return key in this.items
}

// 向字典添加元素
Dictionary.prototype.set = function(key, value) {
    this.items[key] = value
}

// 删除某个元素
Dictionary.prototype.delete = function(key) {
    if(this.items.has(key)) {
        delete this.items[key]
        return true
    }
    return false
}
// 获取某个特定得项
Dictionary.prototype.get = function(key) {
    return this.has(key) ? this.items[key]: 'undefined'
}

// 获取所有的实例
Dictionary.prototype.values = function() {
    let values = []
    for (const key in this.items) {
        if (this.items.hasOwnProperty(key)) {
           values.push(this.items[key])
        }
    }
    return values
}

// 获取所有的标识
Dictionary.prototype.keys = function() {
    return Object.keys(this.items)
}

// 散列表
function HashTable() {
    this.table = []
}

// 散列函数
HashTable.prototype.loseloseHashCode = function(key) {
    var hash = 0
    for (let i = 0; i < key.length; i++) {
        hash += key.charCodeAt(i) // 得到键的hash值
    }
    return hash % 37  // 得到较小的数值，和任意值做除法
}

// 添加项
HashTable.prototype.put = function(key, value) {
    var position = this.loseloseHashCode(key)
    this.table[position] = value
}

// 查找某一项
HashTable.prototype.get = function (key) {
    return this.table[this.loseloseHashCode(key)]
}

// 删除某一项

HashTable.prototype.delete = function (key) {
    this.table[this.loseloseHashCode[key]] = 'undefined'
}

HashTable.prototype.print = function() {
    for (let i = 0; i < this.table.length; i++) {
        if (typeof this.table[i] !== 'undefined') {
            console.log(i + ':' + this.table[i])
        }
        
    }
}

let hash = new HashTable()
// 当hash值一样是，后添加的会将之前添加的替换
hash.put('Gandalf', 'gandalf@email.com'); 
hash.put('John', 'johnsnow@email.com'); 
hash.put('Tyrion', 'tyrion@email.com'); 
hash.put('Aaron', 'aaron@email.com'); 
hash.put('Donnie', 'donnie@email.com'); 
hash.put('Ana', 'ana@email.com'); 
hash.put('Jonathan', 'jonathan@email.com'); 
hash.put('Jamie', 'jamie@email.com'); 
hash.put('Sue', 'sue@email.com'); 
hash.put('Mindy', 'mindy@email.com'); 
hash.put('Paul', 'paul@email.com'); 
hash.put('Nathan', 'nathan@email.com');

hash.print() 

// 解决冲突
// 1. 分离链表

let ValuePair = function(key, value) {
    this.key = key
    this.value = value
    this.toString = function() {
        return '['+ this.key + '-' + this.value+ ']'
    }
}

// 重写put方法
// 添加项
HashTable.prototype.put = function(key, value) {
    var position = this.loseloseHashCode(key)
    if (typeof this.table[position] === 'undefined') {
        this.table[position] = new LinkedList()
    }
    this.table[position].append(new ValuePair(key, value)) // 使用链表添加元素
}