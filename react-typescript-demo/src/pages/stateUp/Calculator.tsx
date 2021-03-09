import React, { ChangeEvent, FC, ReactElement, useState } from 'react'
import CalculatorInput from './CalculatorInput'

interface CalculatorProp {
    // temperature: number
}

const Calculator: FC<CalculatorProp> = ({ }): ReactElement => {
    const [temperature, setTemperature] = useState<string>('')
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setTemperature(e.target.value)
    }
    return (
        <div className='calculator-container'>
            <CalculatorInput scale='f' handleChange={handleChange} temperature={temperature}/>
            <CalculatorInput scale='c' handleChange={handleChange} temperature={temperature}/>
        </div>
    )
}

export default Calculator