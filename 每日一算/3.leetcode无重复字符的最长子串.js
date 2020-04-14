/**
 * @param {string} s
 * @return {number}
 */
//找出相同字符最长距离
var lengthOfLongestSubstring = function(s) {
    let len = 0; //这是最小长度
    let longestStr = ''; // 这是最长字符串
    let curSub = '';
    for (let i = 0; i < s.length; i++) {
        if(!curSub.includes(s[i])) {
            curSub += s[i]
            if(curSub.length > len) {
                longestStr = curSub;
                len = curSub.length;
            }
        }else {
            curSub += s[i];
            let index = curSub.indexOf(s[i]);
            console.log(index);
            console.log(curSub);
            curSub = curSub.slice(index +1);
            console.log(curSub)
        }
    }
    return len;
    
};

console.log(lengthOfLongestSubstring("pwwkew"))