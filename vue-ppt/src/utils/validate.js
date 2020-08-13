/**
 * 用户名校验
 */

 export const validUsername = (name) => {
    const userList = ['admin', 'editor'] // 用户列表
    return userList.indexOf(name.trim()) >= 0
 }

 // 判断是不是第三方链接

 export function isExternal(path) {
     return /^(https?:|mailto:|tel:)/.test(path)
 }