import React, { useState } from 'react';

export default function UseState(props) {
    const [count, setCount] = useState(0)
    return (
        <div>
            <p>总共点击了{count}次</p>
            <div onClick={() => { setCount(count + 1) }}>点击</div>
        </div>
    )
}