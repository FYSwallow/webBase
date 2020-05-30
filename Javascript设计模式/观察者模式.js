// 1.创建一个观察者对象

const Observe = (function() {
    let _message = {};
    return {
        on: function(type, fn) {
            if (typeof _message[type] === "undefined") {
                _message[type] =[fn];
            }else {
                _message[type].push(fn);
            }
        }, //注册消息接口
        subscribe: function(type, args) {
            if (!_message[type]) return;

            let events = {
                type,
                args: args || {}
            }
            for (let i = 0; i < _message[type].length; i++) {
                _message[type][i].call(this,events)
            }
            
        }, // 发布消息接口
        off: function(type, fn) {
            if (_message[type] instanceof Array) {
                for (let i = _message[type].length - 1; i >= 0; i--) {
                    _message[type][i] === fn && _message[type].splice(i, 1)
                    
                }
            }
        } // 移除消息接口
    }
})();

Observe.on('say', function (data) {
    console.log(data.args.text);
})
Observe.on('success',function () {
    console.log('success')
});

//发布消息
Observe.subscribe('say', { text : 'hello world' } )
Observe.subscribe('success'); 