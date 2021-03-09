"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
function sayHello(person) {
    return 'Hello, ' + person;
}
var user = 'Tom';
console.log(sayHello(user));
console.log(sayHello(user));
var arr = ['1', '2'];
var dog = { name: 'xiaohe' };
// 接口继承
var a;
(function (a) {
    var Programmer = /** @class */ (function () {
        function Programmer(name) {
            this.name = name;
        }
        Programmer.prototype.coding = function (code) {
            console.log(code);
        };
        return Programmer;
    }());
    var Web = /** @class */ (function (_super) {
        __extends(Web, _super);
        function Web(name) {
            return _super.call(this, name) || this;
        }
        Web.prototype.eat = function () {
        };
        Web.prototype.work = function () {
        };
        return Web;
    }(Programmer));
})(a || (a = {}));
var b;
(function (b) {
    // 泛型:可以支持不特定的数据类型
    /* 需求，同时返回string和number类型 */
    function getData(val) {
        return val;
    } // 使用any相当于放弃了类型检查
    function getData2(val) {
        return val;
    }
    var getData3 = function (value) {
        return value;
    };
    /*
    react函数组件
const App：FC<> = function

    */
    getData3(1);
})(b || (b = {}));
