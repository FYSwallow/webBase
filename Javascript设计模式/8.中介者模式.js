/**
 * 所有的相关 对象都通过中介者对象来通信，而不是互相引用，所以当一个对象发生改变时，只需要通知中介者对象即可
 */


const A = {
    score: 10,
    changeTo: function (score) {
        this.score = score
        this.getRank()
    },
    getRank: function () {
        let scores = [this.score, B.score, C.score].sort((a, b) => a - b)
        console.log(scores.indexOf(this.score) + 1)
    }
}
const B = {
    score: 10,
    changeTo: function (score) {
        this.score = score
        middle(B)
    },
}
const C = {
    score: 10,
    changeTo: function (score) {
        this.score = score
        middle(C)
    },

}

function middle(obj) {
    let scores = [A.score, B.score, C.score].sort((a, b) => a - b)
    console.log(scores.indexOf(obj.score) + 1)
}

A.changeTo(100)
B.changeTo(50)
C.changeTo(300)