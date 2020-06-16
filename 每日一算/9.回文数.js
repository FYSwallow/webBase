/**
 * 
 * 判断一个整数是否是回文数。回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。
 */
var isPalindrome = function(x) {
    let str = x.toString();
    let flag = true;
    if (str.length > 1) {
        for (let i = 0; i < Math.floor(str.length / 2); i++) {
            if (str[i] !== str[str.length - 1 -i]) {
                flag = false; 
            }
        }
    }
    
    return flag;
};