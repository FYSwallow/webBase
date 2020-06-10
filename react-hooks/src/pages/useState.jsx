import React, { useState } from 'react';

export default function UseState(props) {
    const [count, setCount] = useState(0)
    const [num, setNum] = useState(0)
    return (
        <div>
            <p>总共点击了{count}次</p>
            <p>又总共点击了{num}次</p>
            <div onClick={() => { setCount(count + 1) }}>点击</div>
            <div onClick={() => { setNum(num + 1) }}>点击</div>
        </div>
    )
}