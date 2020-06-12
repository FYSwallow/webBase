/**
 * 策略模式的核心是将一个业务分成两部分,一部分是封装具体操作过程.一部分是区分环境
 */


// 假设需要通过成绩等级来计算学生的最终得分，每个成绩等级有对应的加权值。我们可以利用对象字面量的形式直接定义这个组策略

// 加权映射关系
const levelMap = {
    S: 10,
    A: 8,
    B: 6,
    C: 4
}

// 策略组
var scroeLevel = {
    basicScrol: 80,

    S: function () {
        return this.basicScrol + levelMap['S']
    },
    A: function () {
        return this.basicScrol + levelMap['A']
    },
    B: function () {
        return this.basicScrol + levelMap['B']
    },
    C: function () {
        return this.basicScrol + levelMap['C']
    }
}

// 调用
function getScore(level) {
    return scroeLevel[level] ? scroeLevel[level]() : 0;
}

console.log(getScore("A"))
console.log(getScore("B"))


// 关于表单验证时的策略模式

// 错误提示
var errorMsgs = {
    default: '输入数据格式不正确',
    minLength: '输入数据长度不足',
    isNumber: '请输入数字',
    required: '内容不为空'
};

// 规则集
var rules = {
    minLength: function (value, length, errorMsg) {
        if (value.length < length) {
            errorMsg ? console.log(errorMsg) : console.log(errorMsgs['minLength'])
            return true
        }
    },
    isNumber: function (value, errorMsg) {
        if (!/\d+/.test(value)) {
            errorMsg ? console.log(errorMsg) : console.log(errorMsgs['isNumber'])
            return true
        }
    },
    required: function (value, errorMsg) {
        if (value === '') {
            errorMsg ? console.log(errorMsg) : console.log(errorMsgs['required'])
            return true

        }
    }
};


// 添加校验规则
let add = function (value, rule, errorMsg) {
    var arg = [value];

    if (rule.indexOf('minLength') !== -1) {
        var temp = rule.split(':');
        arg.push(temp[1]);
        rule = temp[0];
    }
    arg.push(errorMsg)
    // 进行校验
    return rules[rule].apply(this, arg);
}

const postData = () => {
    if (add('ccc', 'isNumber', '只能为数字')) return; // 只能为数字
    if (add('ccc', 'required')) return; // 内容不为空
    if (add('ccc', 'minLength:5', '最少5位')) return; // 最少5位
    if (add('ccc', 'minLength:5', '最少5位')) return;
}

postData()