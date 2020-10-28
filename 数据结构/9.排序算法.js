// 冒泡排序
function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                var temp = arr[j+1]
                arr[j+1] = arr[j]
                arr[j] = temp
            }
        }
    }
} 
var arr = [1, 2 , 4, 5, 3, 5]
bubbleSort(arr)
console.log(arr)

// 
