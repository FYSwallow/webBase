import React, { useState, useEffect } from 'react'

export default function UseEffect(props) {
    const [count, setCount] = useState(0)
    const [num, setNum] = useState(0)
    /**
     * useEffect有两个参数,第二个参数为一个数据不写时,默认为首次执行和渲染时执行
     * 当第二个参数为包含状态的数组时,就会监听这个状态
     * 可以写多个useEffect, 多个hook不相互干扰
     */
    useEffect(() => {
        console.log('监听count项目渲染完毕');
        return () => {
            console.log('监听count项目渲染结束');
        }
    }, [count])
    useEffect(() => {
        console.log('监听num项目渲染完毕');
        return () => {
            console.log('监听num项目渲染结束');
        }
    }, [num])
    return (
        <div>
            {console.log('渲染')}
            <p>监听{count}次</p>
            <div onClick={() => { setCount(count + 1) }}>+</div>
            <p>不监听{num}次</p>
            <div onClick={() => { setNum(num + 1) }}>+</div>
        </div>
    )
}