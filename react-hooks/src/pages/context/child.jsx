import React, { Component } from 'react'

class Child extends Component {
    render() {
        return (
            <div>{this.context}</div>
        );
    }
}

export default Child