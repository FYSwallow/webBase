import React from 'react'
import { question, qusetionMapComponent, createComponent } from './config.js'

function DivForm() {
    return (
        <div>
            <h3>{question.title}</h3>
            {
                question.list.map(item => {
                    return createComponent(qusetionMapComponent[item.type], item)
                })
            }
        </div>
    )
}

export default DivForm