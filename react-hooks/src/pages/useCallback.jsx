import React, { useState, useCallback } from 'react'

export default function UseCallback() {
    let [count, setCount] = useState(0)
    let [num, setNum] = useState(0)

    // [count]是依赖项,当num改变后,再去改变count,memory就会和num值同步
    // 如果没有传入依赖项,则会随同num实时刷新
    const memory = useCallback(
        () => {
            return num
        }, [count],
    )

    return (
        <div>
            <button onClick={() => { setCount(count + 1) }}>count++</button>
            <button onClick={() => { setNum(num + 1) }}>num++</button>
        </div>
    )
}