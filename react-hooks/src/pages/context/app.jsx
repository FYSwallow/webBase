import React from 'react'
import { ThemeContext, themes } from './theme.content.js'
import ThemeButton from './theme-button.jsx'

function Toolbar() {
    return (
       <ThemeButton onClick={props.changeTheme}>
           Change Theme
       </ThemeButton>
    )
}