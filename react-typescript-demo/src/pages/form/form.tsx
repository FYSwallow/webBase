import React, { FC, ReactElement } from 'react';

const Form: FC = ({}): ReactElement => {
    return (
        <form >
            <label>
                名字:
                <input type="text" name="name"/>
            </label>
            <input type="submit" value="提交"/>
        </form>
    )
}

export default Form