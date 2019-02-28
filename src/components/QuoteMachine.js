import React, { Component } from 'react';

export default class Quotemachine extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let count = this.props.array.length-1;

        return this.props.array.map((item, index) => {
            return (index == count ? <h3>{item}</h3> : <p>{item}</p>)
        });
    }
}