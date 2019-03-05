import React, { Component } from 'react';

class Counter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            money: 0,
            howManyConsultants: ''
        }
    }

    updateInputValue = (event) => {
        this.setState({
            howManyConsultants: event.target.value
        });
    }

    tick = () => {

        let consultantCost = (750/60)/60;
        let howManyConsultants = this.state.howManyConsultants != '' ? this.state.howManyConsultants : 0
        let calculatedAmount = howManyConsultants * consultantCost

        this.setState({
            money: this.state.money + calculatedAmount
        });
    }

    calculateAmount = () => {
        this.timer = setInterval(this.tick, 1000);
    }

    render() {
        const { money } = this.state;

        return (
            <div>
                <h1 className="mt-4">Tvingmarks Konsult Mötes Kostnadsräknare i React</h1>
                <input type="text" onChange={this.updateInputValue}></input>
                <button onClick={this.calculateAmount}>Let the game begin!</button>
                <h2>{money} kroner</h2>

            </div>
        );
    }
}

export default Counter;