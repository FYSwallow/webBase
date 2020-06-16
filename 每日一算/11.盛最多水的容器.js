/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    let maxNum = 0
    for (let i = 0; i < height.length - 1; i++) {
        for (let j = i + 1; j < height.length; j++) {
            if (height[i] < height[j]) {
                maxNum = height[i] * (j - i) > maxNum ? height[i] * (j - i) : maxNum
            } else {
                maxNum = height[j] * (j - i) > maxNum ? height[j] * (j - i) : maxNum
            }
        }

    }
    return maxNum
};

console.log(maxArea([1,8,6,2,5,4,8,3,7]))