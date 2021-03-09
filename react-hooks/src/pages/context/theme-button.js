import React from 'react'

class ThemedButton extends React.Component {
    render() {
        let theme = this.context
        return (
            <button
                style={{backgroundColor: theme.background}}
            ></button>
        )
    }
}