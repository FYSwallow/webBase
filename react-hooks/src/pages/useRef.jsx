import React, { useRef, useEffect } from 'react';

// 使用useRef获取dom节点
export default function UseRef() {
    let inputRef = useRef(null)
    useEffect(() => {
        inputRef.current.focus()
    });

    return (
        <div>
            <input type="text" ref={inputRef}/>
        </div>
    )
}