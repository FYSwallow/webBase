// 创建一些工具类函数

// 1.重写toString方法
var toString = Object.prototype.toString;

// 2.判断是否是一个数组
function isArray(val) {
    return toString.call(val) === '[Object Array]'
}

// 3.判断是否已经定义
function isUndefined(val) {
    return typeof val === 'undefined'
}

// 4.判断是否是一个Buffer
function isBuffer(val) {
    return val !== null && !isUnderfined(val) && val.constructor !==null && isUndefined(val.constructor) && typeof val.constructor.isBuffer ==='function'
        && val.constructor.isBuffer(val)
} 

// 5.判断是否是一个ArrayBuffer

function isArrayBuffer(val) {
    return toString.call(val) === '[object ArrayBuffer]'
}

// 6.判断是否是表单数据
function isFormData(val) {
    return (typeof FormData ==='undefined') && (val instanceof FormData)
}