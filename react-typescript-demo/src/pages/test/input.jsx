import React from 'react'

function Input(props) {
    const { title, content } = props
    return (
        <>
            {content.map(item => {
                return <label key={item.value}>{item.label}<input type="radio" value={item.value} /></label>
            })}
        </>
    )
}

export default Input