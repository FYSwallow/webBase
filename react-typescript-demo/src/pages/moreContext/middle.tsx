import React, { Component } from 'react';
import { ThemeContext, UserConext } from './context'

class ThemeButton extends Component {
    render() {
        return (
            <ThemeContext.Consumer>
                {
                    (themes) => (
                        <UserConext.Consumer>
                            {
                                (name) => (
                                    <div>{name}{themes}</div>
                                )
                            }
                        </UserConext.Consumer>
                    )
                }
            </ThemeContext.Consumer>
        )
    }
}
export default ThemeButton