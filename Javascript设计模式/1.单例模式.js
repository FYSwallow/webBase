/**
 * 单例模式
 */

// 保证只有一个实例

//只有一个管理员,多次调用也只能有一个
function Manager(name) {
    this.manager = name
}

//获取管理员
Manager.prototype.getManager = function () {
    console.log(this.manager)
}

// 使用闭包保存这个对象,一旦存在已经创建的对象.就返回,没有就创建
let setManager = (function () {
    let manager = null
    return function (name) {
        if (!manager) {
            manager = new Manager(name)
        }
        return manager
    }
})()

setManager('张三').getManager() //张三
setManager('李四').getManager() //张三
setManager('王五').getManager() //张三