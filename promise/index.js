/**
 * promise
 */

function asyncFunction() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject('报错')
        }, 1000)
    })
}

// 如果有catch方法,then方法会在promise对象执行resolve之后执行,catch会在promise执行reject之后执行
// 如果没有catch方法,then方法会在promise对象执行resolve之后执行第一个函数参数,then方法会在promise对象执行reject之后执行第二个函数参数
asyncFunction().then(function (value) {
    console.log('成功' + value)
}, function (value) {
    console.log('失败1' + value)
}
).catch(function (value) {
    console.log('失败2' + value)
})

// promise的状态

//pending ---> fulfilled (success)
//pending ---> rejected (error)


// 创建一个XMLHttpRequest, nodejs没有该对象

// function getUrl(URl) {
//     return new Promise((resolve, reject) => {
//         const xhr = new XMLHttpRequest();
//         xhr.open('GET', URL, true);
//         xhr.onload = function () {
//             if (xhr.status === 200) {
//                 resolve(xhr.responseText)
//             } else {
//                 reject(new Error('请求异常'))
//             }
//         }
//         xhr.onerror = function() {
//             reject(new Error('请求出错'))
//         }
//         xhr.send()
//     })
// }

// var URL = "http://httpbin.org/get";

// getUrl(URL).then(function(value) {
//     console.log(value)
// }).catch(function (error) {
//     console.log(error)
// })