import React, { forwardRef } from 'react'

const ChildRef = forwardRef((props, ref) => {
    return (
        <input type="text" ref={ref} placeholder="请输入表明"/>
    )
})

export default ChildRef