import React, { Component } from 'react';
import { MyContext } from './context'

interface ThemeButtonProps {
    onToggle: () => void
}
class ThemeButton extends Component<ThemeButtonProps> {
    constructor(props: ThemeButtonProps) {
        super(props)
    }

    render() {
        return (
            <MyContext.Consumer>
                {
                    ({ themes, toggleTheme }) => (
                        <div style={{ backgroundColor: themes.background }} onClick={toggleTheme}>123</div>
                    )
                }
            </MyContext.Consumer>
        )
    }
}
ThemeButton.contextType = MyContext;

export default ThemeButton