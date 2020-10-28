function Vue(options) {
    //  确保Vue使用new关键字调用
    if(!(this instanceof Vue)) {
        alert("Vue is a constructor and should be called with the `new` keyword")
    }
    // 对象初始化
    this._init(options)
}

function initMixin(Vue) {
    Vue.prototype._init = function (options) {
        var vm = this
    }
}

// 在Vue原型上添加_init方法
initMixin(Vue)