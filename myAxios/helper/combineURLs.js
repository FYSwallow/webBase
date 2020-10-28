/* 
    合并url
*/

module.exports = function combinUrls(baseUrl, relativeUrl) {
    return relativeUrl ? baseUrl.replace(/\/+$/, '') + '/' + relativeUrl.replace(/^\/+/, '') : baseUrl
}