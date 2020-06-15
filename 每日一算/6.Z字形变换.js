/**
 * 将一个给定字符串根据给定的行数，以从上往下、从左到右进行 Z 字形排列。
 */
var convert = function (s, numRows) {
    let arr = new Array(numRows);
    console.log(arr)
    for (let i = 0; i < numRows; i++) {
        for (let j = 0; j < s.length; j++) {
            if (j % (2*numRows -2) === i || j % (2*numRows -2) === numRows -1) {
                arr[i] += s[j]
            }else{
                let num = j % numRows
                arr[num] += s[j]
            }

        }
    }
    console.log(arr)

};

convert('LEETCODEISHIRING', 3)