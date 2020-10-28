/* 
    判断是否为绝对路径
*/

module.exports = function isAbsoulteUrl(url) {
    return /^([a-z][a-z\d+\-\.]*:)?\/\//i.test(url)
}