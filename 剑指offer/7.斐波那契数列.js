/**
 * 大家都知道斐波那契数列，现在要求输入一个整数n，请你输出斐波那契数列的第n项（从0开始，第0项为0，第1项是1）。
 * n<=39
 */

function Fibonacci(n) {
    if (n <= 1) {
        return n
    }
    return Fibonacci(n - 1) + Fibonacci(n - 2)
}

console.log(Fibonacci(39))