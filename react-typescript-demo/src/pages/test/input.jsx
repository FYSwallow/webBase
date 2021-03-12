import React from 'react'

function Input(props) {
    const { title, content } = props
    return (
        <div className="question-item">
            <h3 className="question-title">{title}</h3>
            {content.map(item => {
                return <label key={item.value}>{item.label}<input type="radio" value={item.value} /></label>
            })}
        </div>
    )
}

export default Input