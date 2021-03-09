import React, { Component, ReactElement } from 'react'
import { ThemeContext, UserConext } from './context';
import MiddleContext from './middle'

type StateType = {
    themes: string
    name: string
}

interface ContextDemoMore {
    state: StateType;
}

class ContextDemoMore extends Component {
    constructor(props: any) {
        super(props)
        this.state = {
            themes: 'dark',
            name: 'Guest'
        }
    }
    render(): ReactElement {
        return (
            <>
                <ThemeContext.Provider value={this.state.themes}>
                    <UserConext.Provider value={this.state.name}>
                        <MiddleContext>
                        </MiddleContext>
                    </UserConext.Provider>
                </ThemeContext.Provider>
            </>
        )
    }
}
export default ContextDemoMore