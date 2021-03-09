import React, { FC, FormEvent, ChangeEvent, ReactElement, useState } from 'react'

const Select: FC = ({ }): ReactElement => {
    const [value, setVal] = useState('')
    const [valuemore, setValMore] = useState<string[]>([])
    const handleSubmit = (e: FormEvent) => {
        console.log(value)
        console.log(valuemore)
        e && e.preventDefault()
    }
    const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setVal(e.target.value)
    }
    const handleChangeMore = (e: ChangeEvent<HTMLSelectElement>) => {
        if (valuemore.includes(e.target.value)) {
            setValMore(valuemore.filter(item => item !== e.target.value))
            return
        }
        setValMore([...valuemore, e.target.value])
    }
    return (
        <form onSubmit={handleSubmit}>
            <label>
                水果:
                <select defaultValue="grapefruit" value={value} onChange={handleChange}>
                    <option value="grapefruit">葡萄柚</option>
                    <option value="lime">酸橙</option>
                    <option selected value="coconut">椰子</option>
                    <option value="mango">芒果</option>
                </select>
                <select defaultValue={[]} value={valuemore} multiple={true} onChange={handleChangeMore}>
                    <option value="grapefruit">葡萄柚</option>
                    <option value="lime">酸橙</option>
                    <option selected value="coconut">椰子</option>
                    <option value="mango">芒果</option>
                </select>
            </label>
            <input type="submit" value="提交" />
        </form>
    )
}

export default Select