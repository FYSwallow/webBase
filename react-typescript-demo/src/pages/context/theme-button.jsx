import React, { Component } from 'react';
import { MyContext } from './context'

class ThemeButton extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div style={{ backgroundColor: this.context.background }} onClick={this.props.onToggle}>123</div>
        )
    }
}
ThemeButton.contextType = MyContext;

export default ThemeButton