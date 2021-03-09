/* 

    实现一个操作数据库的库
    约束代码规范， 代码复用
*/

interface DBI<T> {
    add(info: T): boolean
    update(info: T, id: number): boolean
    delete(id: number): boolean
    get(id: number): T
}

// 实现一个操作数据库的类

class MysalDb<T> implements DBI<T> {
    add(info: T): boolean {
        throw new Error("Method not implemented.");
    }
    update(info: T, id: number): boolean {
        throw new Error("Method not implemented.");
    }
    delete(id: number): boolean {
        throw new Error("Method not implemented.");
    }
    get(id: number): T {
        throw new Error("Method not implemented.");
    }
    
}


// 实例化时将类作为泛型传入

class User{
    username: string | undefined
    password: string | undefined
}

var zhansan = new User() 
zhansan.username = 'zhansan'
zhansan.password = '123456'

/* 
    没有类型校验
var cmysql = new MysalDb()
cmysql.add('123') */

var cmysql = new MysalDb<User>()
cmysql.add(zhansan) 


// 装饰器工厂


function logClass(params: string) {
    return function(target: any) {

    }
}

@logClass('123')
class People {
    constructor() {

    }
}