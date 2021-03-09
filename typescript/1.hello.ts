function sayHello(person: string) {
    return 'Hello, ' + person;
}

let user = 'Tom';
console.log(sayHello(user));
console.log(sayHello(user));


// 可索引接口
interface Animal {
    [index: string]: string
}
interface Arrr {
    [index: number]: string
}

const arr: Arrr = ['1', '2']
const dog: Animal = { name: 'xiaohe' }


// 接口继承

namespace a {
    interface Animal {
        eat(): void
    }
    interface Person extends Animal {
        work(): void
    }
    class Programmer {
        public name: string;
        constructor(name: string) {
            this.name = name
        }

        coding(code: string) {
            console.log(code)
        }
    }
    class Web extends Programmer implements Person {
        constructor(name: string) {
            super(name)
        }
        eat() {

        }
        work() {

        }
    }
}

namespace b {
    // 泛型:可以支持不特定的数据类型

    /* 需求，同时返回string和number类型 */
    function getData(val: any): any {
        return val
    } // 使用any相当于放弃了类型检查


    function getData2<T>(val: T): T {
        return val
    }

    // 泛型接口
    interface ConfigFn<T> {
        (value: T): T
    }

    var getData3: ConfigFn<number> = (value): number =>{
        return value
    }

    /* 
    react函数组件
const App：FC<> = function

    */

    getData3(1)
}

