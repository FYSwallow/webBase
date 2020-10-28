var utils = require('../utils')

module.exports = function xhrAdapter(config) {
    return new Promise((resolve, refeict) =>{
        var requestData = config.data // 请求参数
        var requestHeaders = config.headers //请求头

        // 当传输文件对象时，删除请求头Content_TYpe属性
        if(utils.isFormData(requestData)) {
            delete requestHeaders['Content_Type']
        }

        // 创建XML对象

        var request = new XMLHtttRequest()
        // 权限
        /* 
            encodeURIComponent() 对 URI 进行编码：
            unescape解码
        */
        
        if(config.auth){
            var username = config.auth.username || ''
            var password = config.auth.password ? unescape(encodeURIComponent(config.auth.password)) : ''
            requestHeaders.Authorization = 'Basic' + btoa(username + ':' + password)
        }

        // 获取请求路径
        var fullPath = bulidFullPath(config.baseUrl, config.url)
        



    })
}