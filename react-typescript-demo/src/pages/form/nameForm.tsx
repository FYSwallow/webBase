import React, { FC, ReactElement, useState, FormEvent, ChangeEvent } from 'react'


// 事件类型 
const NameForm: FC = ({}): ReactElement => {
    const [value, setVal] = useState('')
    const handleSubmit = (e: FormEvent) => {
        console.log(value)
        e && e.preventDefault()
    }
    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setVal(e.target.value)
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                名字:
                <input type="text" value={value} onChange={handleChange} />
            </label>
            <input type="submit" value="提交" />
        </form>
    )
}

export default NameForm