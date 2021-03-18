/* 
    两数交换
*/
function changeOrder1(a, b) {
    b = a + b
    a =  b - a
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
/* 
    比较任何相邻的项， 如果第一项比第二项大，就交换他们
*/
 
function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length -1; j++) {
            if (arr[j] > arr[j + 1]) {
                changeArr(arr, j, j + 1)
            }
        }
    }
} 
var arr = [6, 2 , 4, 5, 3, 5]
bubbleSort(arr)
console.log(arr)

// 
