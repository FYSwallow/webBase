import React, { FC, ReactElement, ChangeEvent, useState } from 'react'


interface Scale {
    [index: string]: string
}
interface PropsData {
    scale: string,
    temperature:string,
    handleChange:(e: ChangeEvent<HTMLInputElement>)=>void
}
const scaleNames: Scale = {
    'c': '摄氏度',
    'f': '华式摄氏度'
}

const CalculatorInput: FC<PropsData> = ({
    scale,
    temperature,
    handleChange
}): ReactElement => {
   
    return (
        <fieldset>
            <legend>温度为{scaleNames[scale]}</legend>
            <input type="text"
                value={temperature}
                onChange={handleChange} />
        </fieldset>
    )
}

export default CalculatorInput