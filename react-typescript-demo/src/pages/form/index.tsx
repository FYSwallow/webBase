import React, { FC, ReactElement } from 'react'
import Form from './form'
import NameForm from './nameForm'
import TextArea from './textArea'
import Select from './select'

const FormApp: FC = ({

}): ReactElement => {
    return (
        <div className="form-app">
            <div className="form-container">
                <Form />
            </div>
            <div className="name-form-container">
                <NameForm />
            </div>
            <div className="textarea-form-container">
                <TextArea />
            </div>
            <div className="select-form-container">
                <Select />
            </div>
        </div>
    )
}

export default FormApp