"use strict";
/*

    实现一个操作数据库的库
    约束代码规范， 代码复用
*/
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// 实现一个操作数据库的类
var MysalDb = /** @class */ (function () {
    function MysalDb() {
    }
    MysalDb.prototype.add = function (info) {
        throw new Error("Method not implemented.");
    };
    MysalDb.prototype.update = function (info, id) {
        throw new Error("Method not implemented.");
    };
    MysalDb.prototype.delete = function (id) {
        throw new Error("Method not implemented.");
    };
    MysalDb.prototype.get = function (id) {
        throw new Error("Method not implemented.");
    };
    return MysalDb;
}());
// 实例化时将类作为泛型传入
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());
var zhansan = new User();
zhansan.username = 'zhansan';
zhansan.password = '123456';
/*
    没有类型校验
var cmysql = new MysalDb()
cmysql.add('123') */
var cmysql = new MysalDb();
cmysql.add(zhansan);
// 装饰器工厂
function logClass(params) {
    return function (target) {
    };
}
var People = /** @class */ (function () {
    function People() {
    }
    People = __decorate([
        logClass('123')
    ], People);
    return People;
}());
