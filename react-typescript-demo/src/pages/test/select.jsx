import React from 'react'

function Select(props) {
    const { content, title } = props
    console.log(props)
    return (

        <div className="question-item">
            <h3 className="question-title">{title}</h3>
            <select name="" id="">
                {content.map(item => {
                    return <option value={item.value} key={item.value}>{item.option}</option>
                })}
            </select>

        </div>
    )
}

export default Select