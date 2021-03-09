import React, { Component, ReactElement } from 'react'
import { themes, MyContext, ThemesInfo } from './context';
import ThemeButton from './theme-button.jsx'
import MiddleContext from './middle'

interface ContextDemoState {
    themes: ThemesInfo;
}

class ContextDemo extends Component {

    state: ContextDemoState = {
        themes: themes.dark,
    }

    toggleTheme = () => {
        console.log(123)
        this.setState((state: ContextDemoState) => ({
            themes: state.themes === themes.dark ? themes.light : themes.dark
        }))
    }
    render(): ReactElement {
        return (
            <>
                <MyContext.Provider value={this.state.themes}>
                    <MiddleContext>
                        <ThemeButton  onToggle={this.toggleTheme}></ThemeButton>
                    </MiddleContext>
                </MyContext.Provider>
            </>
        )
    }
}
export default ContextDemo