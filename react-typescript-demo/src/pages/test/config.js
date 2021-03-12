import React, { lazy, Suspense } from 'react'

const Input = lazy(()=> import('./input.jsx'))
const Select = lazy(()=> import('./select.jsx'))
const TextArea = lazy(()=> import('./textarea.jsx'))

export const createComponent = (MyContent, props) => {
    return <Suspense fallback={<div>Loading</div>}><MyContent {...props}/></Suspense>
}
export const question = {
    title: '第二期调查报告',
    list: [
        {
            type: 'input',
            title: '第一题',
            content: [
                { label: 'a', value: 1 },
                { label: 'b', value: 2 },
                { label: 'c', value: 3 },
                { label: 'd', value: 4 },
            ]
        },
        {
            type: 'select',
            title: '第二题',
            content: [
                { option: 'a', value: 1 },
                { option: 'b', value: 2 },
                { option: 'c', value: 3 },
                { option: 'd', value: 4 },
            ]
        },
        {
            type: 'textarea',
            title: '第三题',
            content: 'qweeeeeeeeeeweeeeeee'
        }
    ]
}

export const qusetionMapComponent = {
    input: Input,
    select: Select,
    textarea: TextArea,
}