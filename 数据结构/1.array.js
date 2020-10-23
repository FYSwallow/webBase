// 斐波那契数列

var feibonaqi = []
feibonaqi[0] = 0
feibonaqi[1] = 1
feibonaqi[2] = 1
feibonaqi[3] = 1

for (let i = 4; i < 20; i++){
    feibonaqi[i] = feibonaqi[i - 1] + feibonaqi[i - 2]
}

console.log(feibonaqi[19])

// 添加元素
var nums = [0,1,2,3,4,5,6,7]
nums[nums.length - 1] = 8

nums.push(9)

nums.push(10, 11, 12)
// 头部添加元素
nums.unshift(-2, -1)
console.log(nums)

// 首位删除元素
nums.pop()
nums.shift()

console.log(nums)

// 元素替换

var res = nums.splice(2, 3, 1, 1,1,) // 返回值为删除的元素组成的数组
console.log(res, nums)


var everyRes = nums.every((item, index)=>{
    return item > -5
})

console.log(everyRes)

var someRes = nums.some((item, index) =>{
    return item > 10
})

console.log(someRes)

// forEach迭代

nums.forEach((item, index) => {
    // 
})

// map有返回值
var mapRes = nums.map((item, index) => {
    return item*index
})
console.log(mapRes)

// filter 过滤, 返回符合条件的每一项，组成的数组

var filterRes = nums.filter((item, index) => {
    return item > index -1
})

console.log(filterRes)

// reduce方法
var reduceRes = nums.reduce((pre, cur, index) => {
    return pre + cur
})

console.log(reduceRes)

// 创建新数组
let nums2 = Array.from(nums, item => item + 1 )
console.log(nums2)

// 将传入的数据转化为数组
let nums3 = Array.of(...nums)
console.log(nums)

// 静态填充方法,fill(填充值， 起始位置， 结束位置)
nums.fill(3, 3, 5)
console.log(nums)

// 复制数据填充 cooyWithin(起始填充位置， 起始复制位置， 复制结束位置)
var copyNums = [1, 2 ,3 ,4, 5, 6, 7, 8, 9, 10 ]
var copyRes1 = copyNums.copyWithin(1, 5)
var copyRes2 = copyNums.copyWithin(1, 4, 5)

console.log(copyRes1, copyRes2)

// 排序

nums.sort((a, b) => {
    return b - a
})

console.log(nums)

// 搜索
var numsSearch = nums.indexOf(10)
console.log(numsSearch)