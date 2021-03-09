import React, { FC, FormEvent, ReactElement, useState } from 'react'

const TextArea: FC = ({}): ReactElement => {
    const [value, setVal] = useState('')
    const handleSubmit = (e: FormEvent) => {
        console.log(value)

        e && e.preventDefault()
    }
    const handleChange = (e: any) => {
        setVal(e.target.value)
    }
    return (
        <form onSubmit={handleSubmit}>
            <label>
                文本框
                <textarea
                    name=""
                    id=""
                    rows={8}
                    value={value}
                    onChange={handleChange}
                    >

                </textarea>
            </label>
            <input type="submit" value="提交"/>
        </form>
    )
}

export default TextArea