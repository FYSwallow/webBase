/* 
    两数交换
*/
function changeOrder1(a, b) {
    b = a + b
    a = b - a
    b = b - a
}
function changeOrder1(a, b) {
    let c = b
    b = a,
        a = c
}
function changeOrder2(a, b) {
    [b, a] = [a, b]
}

/* 
    交换数组相邻位置
*/
function changeArr(arr, i, j) {
    let c = arr[j]
    arr[j] = arr[i],
        arr[i] = c
}

/**
 * 冒泡排序:比较任何相邻的项， 如果第一项比第二项大，就交换他们
 * @param {*} arr 需要排序的数组
 */
function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                changeArr(arr, j, j + 1)
            }
        }
    }
}
let bubbleArr = [6, 2, 4, 5, 3, 5]
bubbleSort(bubbleArr)
console.log(bubbleArr)

/**
 * 选择排序: 找到数据结构中较小值并放到第一位, 接着找到第二小的放到第二位, 以此类推
 * @param {*} arr 
 */
function selectionSort(arr) {
    let length = arr.length, indexMin
    for (let i = 0; i < length; i++) {
        indexMin = i
        for (let j = i; j < length; j++) {
            if (arr[indexMin] > arr[j]) {
                changeArr(arr, indexMin, j)
            }
        }
    }
}

let selectionArr = [6, 2, 4, 5, 3, 5]
selectionSort(selectionArr)
console.log(selectionArr)

/**
 * 插入排序,从第二项开始,将每一项的值按顺序插入
 * @param {*} arr 
 */
function insertSort(arr) {
    let length = arr.length, temp, j
    for (let i = 1; i < length; i++) {
        temp = arr[i], j = i
        while (j > 0 && temp < arr[j - 1]) {
            arr[j] = arr[j - 1]  //之前的数组项后移
            j--
        }
        arr[j] = temp // 将数组项插入
    }
}

let insertArr = [6, 2, 4, 5, 3, 5]
insertSort(insertArr)
console.log(insertArr)

/**
 * 归并排序,通过递归方式将数组切割为多个数组, 先进行小数组内部排序, 再进行合并排序
 * @param {*} arr 
 */

function merge(left, right) {
    let result = [], il = 0, ir = 0;
    while (il < left.length && ir < right.length) {
        if (left[il] < right[ir]) {
            result.push(left[il++]);
        } else {
            result.push(right[ir++]);
        }
    }
    while (il < left.length) {
        result.push(left[il++]);
    }
    while (ir < right.length) {
        result.push(right[ir++]);
    }
    return result;
}

function reduceSort(arr) {
    let length = arr.length
    if (length === 1) return arr

    let mid = Math.floor(length / 2),
        left = arr.slice(0, mid),
        right = arr.slice(mid, length)

    return merge(reduceSort(left), reduceSort(right))
}

let reduceArr = [6, 2, 4, 5, 3, 5]

console.log(reduceSort(reduceArr))

/**
 * 快排: 取中间项为参照数, 比较左右大小, 将大于参考值的移到参照项右侧,小于移至左侧,递归调用即可
 * @param {*} arr 
 */
function quickSort(arr) {
   
    if (arr.length <= 1) return arr

    let pointIndex = Math.floor(arr.length / 2)
    let point = arr.splice(pointIndex, 1)[0]
    let left = [], right = []
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < point) {
            left.push(arr[i])
        } else {
            right.push(arr[i])
        }
    }

    return quickSort(left).concat([point], quickSort(right))
}

let quickArr = [6, 2, 4, 5, 3, 5]
console.log(quickSort(quickArr))