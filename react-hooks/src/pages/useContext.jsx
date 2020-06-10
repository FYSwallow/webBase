import React, { useContext } from 'react';

//UseContext 必须在React使用子孙传值时使用

const stateContext = React.createContext('宝贝')
function Father() {
    return (
        <div>
            <Child></Child>
        </div>
    )
}
function Child() {
    const value = useContext(stateContext)
    return (
        <div>{value}</div>
    )
}
export default function UseContext(props) {
    return (
        <stateContext.Provider value={'宝贝'}>
            <Father/>
        </stateContext.Provider>
    )
}