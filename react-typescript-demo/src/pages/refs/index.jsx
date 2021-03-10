import React, { createRef } from 'react';
import ChildRef from './childRef.jsx'

function RefsDemo() {
    const inputRef = createRef()
    return (
        <div>
            {/* <input type="text" ref={inputRef} onChange={() => console.log(inputRef.current.value)} /> */}
            <button onClick={() => console.log(inputRef.current.value)}>父级点击</button>
            <ChildRef ref={inputRef}></ChildRef>
        </div>
    )
}

export default RefsDemo