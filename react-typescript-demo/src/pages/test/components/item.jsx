import React from 'react'

function QuestionItem({ info, children }) {
    return (
        <div className="question-item">
            <h3 className="question-title">{info.title}</h3>
            {children}
        </div>
    )
}

export default QuestionItem