// 反转整数
var reverse = function(x) {
    let now = Math.abs(x).toString().split("").reverse().join("");
    if (x < 0) {
        return now <= Math.pow(2, 31)? -now: 0;
    }else {
        return now < Math.pow(2, 31)? now: 0;
    }
};

console.log(reverse(120))