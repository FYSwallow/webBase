/**
 * 用户名校验
 */

 export const validUsername = (name) => {
    const userList = ['admin', 'editor'] // 用户列表
    return userList.indexOf(name.trim()) >= 0
 }