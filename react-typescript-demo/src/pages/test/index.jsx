import React from 'react'
import QuestionItem from './components/item'
import { question, qusetionMapComponent, createComponent } from './config.js'

function DivForm() {
    return (
        <div>
            <h3>{question.title}</h3>
            {
                question.list.map((item, index) => {
                    return (
                        <QuestionItem info={item} key={index}>
                            {createComponent(qusetionMapComponent[item.type], item)}
                        </QuestionItem>
                    )
                })
            }
        </div>
    )
}

export default DivForm