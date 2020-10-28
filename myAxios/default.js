// 基本配置
var utils = require('./utils')
// 设置默认请求头
var DEFAULT_CONTENT_TYPE = {
    'Content_Type': 'application/x-www-form-urlencoded'
}

// 设置contentType
function setContentTypeIfUnSet(headers, val){
    if(!utils.isUndefined(headers) && !utils.isUndefined(headers['Content_Type'])) {
        headers['Content_Type'] = val
    }
}

// 请求适配器，判断是node环境还是浏览器环境
function getDefaultAdaptar(){
    var adaptar;
    if(typeof XMLHttpRequest !== 'undefined'){
        adaptar = require('./adapters/xhr')
    } else if(typeof process !== 'undefined'&& utils.toString.call(process) === '[object process]') {
        adaptar = require('./adapters/http')
    }
    return adaptar
}
