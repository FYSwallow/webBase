/**
 * 给定一个字符串 s，找到 s 中最长的回文子串。你可以假设 s 的最大长度为 1000。
 */

var longestPalindrome = function(s) {
    if(s.length <= 1) return s;
    let maxStr = s[0];
    for (let i = 0; i < s.length; i++) {
        for (let j = s.length - 1; j > i; j--) {
            if(s[i] === s[j]) {
                let str = s.slice(i, j + 1);
                let flag = isReserveStr(str);
                if(flag && maxStr.length < str.length) {
                    maxStr = str;
                    break;
                }
            }
            
        }
        
    }
    return maxStr
};

function isReserveStr(str) {
    let flag = true; // 判断条件
    for (let i = 0; i < Math.floor(str.length / 2); i++) {
        if(str[i] !== str[str.length - 1 - i]){
            flag = false
        }
    }
    return flag
}

console.log(longestPalindrome("dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd"))