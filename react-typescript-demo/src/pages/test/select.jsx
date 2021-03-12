import React from 'react'

function Select({ content, title }) {
    return (
        <>
            <select name="" id="">
                {content.map(item => {
                    return <option value={item.value} key={item.value}>{item.option}</option>
                })}
            </select>
        </>
    )
}

export default Select