/**
 * 
 * 在一个二维数组中（每个一维数组的长度相同），每一行都按照从左到右递增的顺序排序，每一列都按照从上到下递增的顺序排序。
 * 请完成一个函数，输入这样的一个二维数组和一个整数，判断数组中是否含有该整数。
 */


// 方法一
function Find(target, array) {
    let result = false
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].length; j++) {
            if (array[i][j] === target) {
                result = true
            }
        }
    }
    return result
}

// 方法二

function find1(target, array) {
    return array.some(arr=>arr.some(e=>e===target))
}

console.log(find1(7,[[1,2,8,9],[2,4,9,12],[4,7,10,13],[6,8,11,15]]))