var myAtoi = function(str) {
    let num = parseInt(str);
    if(isNaN(num)) {
        return 0;
    }else if(num < Math.pow(-2, 31) || num > Math.pow(2, 31)) {
        return num < Math.pow(-2, 31)? Math.pow(-2, 31) : Math.pow(2, 31)
    } else {
        return num;
    }
};

console.log(myAtoi("-12312 afdsf"))