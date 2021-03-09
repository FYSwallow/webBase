"use strict";
// /**
//  * 数据类型
//  */
function getInfo(str) {
    if (typeof str === 'string') {
        console.log('string' + str);
        return '我叫' + str;
    }
    else {
        console.log('number' + str);
        return '我的年龄是' + str;
    }
}
console.log(getInfo('张三'));
