import React, { FC, ReactElement } from 'react'
import Calculator from './Calculator'

const StateUp: FC =({}): ReactElement => {
    return (
        <div className="state-up-container">
            <h3>状态提升</h3>
            <Calculator/>
        </div>
    )
}

export default StateUp