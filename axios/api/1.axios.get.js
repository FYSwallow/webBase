
// 1.创建一个Axios构造函数

function Axios() {

}

// 2.给Axios原型添加delete,get, head, options方法
["delete", "get", "head", "options"].forEach(function(item){
    Axios.prototype[item] = function() {

    }
})