// 登录账号验证

// 传统方法
function checkName(params) {
    
}

function checkPass(params) {
    
}
// ...

// 面向对象编程，减少全局变量
// 为Fuction添加一个为对象原型添加属性的公有方法
Function.prototype.addMethods = function(name, fn) {
    this.prototype[name] = fn //
    return this // 链式调用
}

var Methods =  function(){}
Methods.addMethods('checkName', function () {
    //  验证姓名
    console.log('姓名-----小王')
    return this
}).addMethods('checkPass', function () {
    //  验证密码
    console.log('密码-----123')
    return this
})

var m = new Methods()
// m.checkName().checkPass()

// 为Fuction添加一个为实例化对象添加属性的公有方法
Function.prototype.addMethods = function(name, fn) {
    this[name] = fn //
    return this // 链式调用
}

var methods = new Function()

methods.addMethods('checkName', function () {
    //  验证姓名
    console.log('姓名-----小王')
    return this
}).addMethods('checkPass', function () {
    //  验证密码
    console.log('密码-----123')
    return this
})

// methods.checkName().checkPass()


// 函数中返回对象的属性的链式调用
var checkObj = function(){
    return {
        checkName: function() {
            console.log('姓名-----小李')
            console.log(this)
        },
        checkPass: function() {
            console.log('密码-----456')
        }
    }
}

var m2 = checkObj()
m2.checkName()