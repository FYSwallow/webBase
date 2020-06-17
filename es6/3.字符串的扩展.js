/**
 * 字符串的扩展
 */

//  模板字符串

// 新增Api, 转换二进制编码为字符,不能识别大于0xffff的字符
console.log(String.fromCodePoint(0x20BBf))

{
    let str = "hellow, nihao"
    console.log(str.startsWith('Hello'))
    console.log(str.endsWith('o'))    
    console.log(str.includes('he'))
}

// repeat 将一个字符串重复几次,不会修改原字符串
{
    let str ='sss'
    console.log(str.repeat(3)) // 负数或者infinity会报错,0到-1之间的数会视为0
    console.log(str.repeat(-0.3)) // ""
}

// 字符串补全功能, 不会修改原字符串
// padStart, padEnd

{
    let str = "xx"
    console.log(str.padStart(2, 'ab')) //xx
    console.log(str.padStart(3, 'ab')) //xxab
    console.log(str.padStart(5, 'ab')) //xxaba
    console.log(str)
}

// 消除头部或者尾部的空格, 都不会修改原字符串
// trimStart, trimEnd

{
    let s =' adasdf '
    console.log(s.trim()) // ' adasdf'
    console.log(s.trimStart()) // 'adasdf '
    console.log(s.trimEnd()) // ' adasdf'
}