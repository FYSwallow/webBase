import React, { Component, ReactElement } from 'react'
import { themes, MyContext, ThemesInfo } from './context';
import ThemeButton from './theme-button'
import MiddleContext from './middle'

type StateType = {
    themes: ThemesInfo;
    toggleTheme: () => void
}

interface ContextDemo {
    state: StateType;
}

class ContextDemo extends Component {
    constructor(props: any) {
        super(props)
        this.state = {
            themes: themes.dark,
            toggleTheme: this.handleToggleTheme
        }
    }

    handleToggleTheme = () => {
        this.setState((state: StateType) => ({
            themes: state.themes === themes.dark ? themes.light : themes.dark
        }))
    }

    render(): ReactElement {
        return (
            <>
                <MyContext.Provider value={this.state}>
                    <MiddleContext>
                        <ThemeButton onToggle={this.state.toggleTheme}></ThemeButton>
                    </MiddleContext>
                </MyContext.Provider>
            </>
        )
    }
}
export default ContextDemo