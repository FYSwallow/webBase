"use strict";

/**
 * 排序
 */
function swap(arr, i, j) {
  var temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
} // 1.冒泡排序


function bubbleSort(arr) {
  if (arr.length <= 1) return arr;

  for (var i = arr.length; i >= 2; i--) {
    for (var j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
      }
    }
  }

  return arr;
}

console.log(bubbleSort([2, 5, 3, 25, 15, 26, 0, 8])); // 选择排序

function selectSort(arr) {
  for (var i = 0; i < arr.length; i++) {
    for (var j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[i]) {
        swap(arr, i, j);
      }
    }
  }

  return arr;
}

console.log(selectSort([2, 5, 3, 25, 15, 26, 0, 8]));