/**
 * 散列
 */

 function HashTable() {
     this.table = new Array(137);
 }

 // 定义散列函数

 HashTable.prototype.simpleHash = function (data) {
    let total = 0;
    for (let i = 0; i < data.length; i++) {
        total += data.charCodeAt(i)
    }
    return total % this.table.length;
 }

 //