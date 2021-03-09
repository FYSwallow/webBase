import React, { memo } from 'react'

const Child = memo(({ handleClick, count }) => {
    console.log('child')
    return (
    <button onClick={handleClick}>点击子组件{count}</button>
    )
})

export default Child