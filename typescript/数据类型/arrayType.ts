/**
 * 数组类型
*/

let arr1: number[] = [1, 2, 3, 4, 5]; // 只能为number类型
// arr1.push('1') 
let arr2: Array<number> = [1, 2, 3, 4, 5]
interface NumberArray {
    [index: number] : number
}
let arr3: NumberArray = [1, 2, 3, 4, 5]

/**
 * 定义函数
 */

//  1. 函数申明

function sum(x: number, y: number): number {
    return x + y
}

sum(1, 2) // 无法使用多余或少于的参数个数


// 函数表达式

let sum1: (x: number, y:number) => number =  function( x:number, y:number): number {
    return x + y
}

// 使用?表示可选的参数, 可选参数必须放在最后,可以使用默认值代表可选参数
function bulidName(lastName:string, firstName?: string ,name='') {
    if(firstName) {
        return firstName + lastName
    } else {
        return lastName
    }
}

bulidName('tom')

// 使用剩余参数
function add(arr1: number[], ...items: any[]) {

}

// 方法重载 ,一个方法根据参数的个数和类型的不同,而编译成不同的方法
function reload(x:number, y: number): number;
function reload(x:number, y: string): string;
function reload(x: number, y: number | string): number | string {
    if(typeof y === 'number') {
        return x + y
    } else {
        return x + y
    }
}
console.log(reload(1, 1))
console.log(reload(1, '王'))

// 类型断言,指定某个变量为某个类型
interface Cat {
    name: string;
    run(): void;
}

interface Fish {
    name: string;
    swim(): void;
}
// 由于swim为Fish特有的属性,需要将参数断言为fish
function isFish(animal: Cat | Fish) {
    if(typeof (animal as Fish).swim === 'function') {
        return true
    }
    return false
}

interface Animal {
    name: string;
}
interface Dog {
    name: string;
    run(): void;
}

function testAnimal(animal: Animal) {
    return (animal as Dog);
}
function testCat(dog: Dog) {
    return (dog as Animal);
}