/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
    let result = ""
    let keys = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1],
        values = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
    for (let i = 0; i < keys.length; i++) {
        while (num >= keys[i]) {
            num -= keys[i]
            result += values[i]
        }
        
    }
    return result
};

console.log(intToRoman(568))