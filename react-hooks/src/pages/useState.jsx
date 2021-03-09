import React, { useState, useMemo, useCallback } from 'react';
import Child from './child';

export default function UseState(props) {
    const [count, setCount] = useState(0)
    const [num, setNum] = useState(0)

    const listNode = useMemo(() => {
        return Array(10).fill(1).map((item, index) => {
            return <li key={index}>{index}</li>
        })
    },[])

    const handleClick = useCallback(() => {
        console.log(123)
    },[])

    // const handleClick = () => {
    //     console.log(123)
    // }

    return (
        <div>
            <p>总共点击了{count}次</p>
            <p>又总共点击了{num}次</p>
            <div onClick={() => { setCount(count + 1) }}>点击</div>
            <div onClick={() => { setNum(num + 1) }}>点击</div>
            <Child handleClick={handleClick} count={count}></Child>
            {listNode}
        </div>
    )
}