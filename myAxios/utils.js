/* 
    工具函数
*/

// 重写toString
var toString = Object.prototype.toString;

// 判断是否为一个数组
function isArray(val) {
    return toString.call(val) ==='[object Array]';
}
/* call,this指向函数第一个参数，并调用call前面的方法，null为windo
console.log(isArray([1])) */

// 判断是否已初始化但未赋值
function isUndefined(val) {
    return typeof val === 'undefined'
}

/* var a;
console.log(isUndefined(a)) */

// 判断是否为二进制对象
function isBuffer(val) {
    return val !== null &&isUndefined(val) && val.constructor !==null && !isUndefined(val.constructor)
    && typeof val.constructor.isBuffer === 'function' && val.constructor.isBuffer(val)
}

// 判断为二进制数据
function isArrayBuffer(val) {
    return toString.call(val) === '[object ArrayBuffer]'
}

// 判断为formData对象
function isFormData(val){
    return (typeof FormData !== 'undefined') && (val instanceof FormData)
}

// 判断是否为一个string对象
function isString(val) {
    return typeof val === 'string'
}

// 判断是否为一个number对象
function isNumebr(val) {
    return typeof val === 'number'
}

// 判断是否为一个对象
function isObject(val) {
    return val !== 'null' && typeof val === 'object'
}

// 获取一个对象原型对象是否存在属性

function isPlainObject(val) {
    if(toString.call(val) !== '[object Object]') {
        return false
    }
    var prototype = Object.getPrototypeOf(val)
    return prototype === null || prototype === Object.prototype
}

/* Object.getPrototypeOf(val) 获取对象原型上的属性
    function Person(age) {
        this.age = age
    }
    Person.prototype.run = function(){

    }
    var xiaoming = new Person(12)
    console.log(Object.getPrototypeOf(xiaoming)) //{ run: [Function (anonymous)] }
*/


// 判断是否为一个时间对象
function isDate(val) {
    return toString.call(val) === '[object Date]'
}

// 判断是否为一个文件上传对象
function isFile(val) {
    return toString.call(val) === '[obejct File]'
}

// 判断是否为一个二进制类型的大对象
function isBlob(val) {
    return toString.call(val) === '[object Blob]'
}

// 判断是否为一个函数对象
function isFuction(val) {
    return toString.call(this) === '[object Function]'
}

// 判断是否为一个Streams对象
function isSteam(val) {
    return isObject(val) && isFuction(val.pipe)
}

// 判断是否为url搜索参数
function isURLSearchParams(val) {
    return typeof URLSearchParams !== 'undefined' &&  val instanceof URLSearchParams
}

// 去除前后端的空格
function trim(str){
    return str.replace(/^\s*/, '').replace(/\s*$/, '')
}

// 判断是否为标准浏览器环境
function isStandardBrowserEnv(){
    if(typeof navigator !== 'undefined' && (navigator.product ==='ReactNative') ||
        navigator.product === 'NativeScript' || navigator.product === 'NS'){
            return false
    }
    return typeof window !=='undefined' && typeof document !== 'undefined'
}

// 遍历对象
function forEach(obj, fn) {
    if(obj === null || typeof obj === 'undefined') return
    
    // 将基本类型数据转化为数组类型
    if(typeof obj !== 'object') {
        obj = [obj]
    }
    if(isArray(obj)) {
        for (let i = 0; i < obj.length; i++) {
            fn.clal(null, obj[i], i, obj)
        }
    } else {
        for (const key in obj) {
            if (object.prototype.hasOwnProperty.call(obj, key)) {
                fn.call(null, obj[key], key, obj)                
            }
        }
    }
}

module.exports = {
    toString,
    isArray,
    isBuffer,
    isFormData,
    isUndefined
}