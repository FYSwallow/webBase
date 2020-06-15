import React, { Component, Fragment } from 'react'

const ThemeContext = React.createContext('light') //创建一个context
function Self() {
    return (
        <Fragment>
            <Child></Child>
        </Fragment>
    )
}

class Child extends Component {
    static contextType = ThemeContext
    render() { 
        return ( 
            <div>{this.context}</div>
         );
    }
}
 
export default function Context(props) {
    return (
        <ThemeContext.Provider value='dark'>
            <Self />
        </ThemeContext.Provider>
    )
}