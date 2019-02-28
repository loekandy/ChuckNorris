import React, { Component } from 'react';
import axios from 'axios';
import Quotemachine from './QuoteMachine';
import Loading from './Loading';

export default class Mainbox extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [''],
            loading: false
        }
    }


    fakeLoading = () => {
        this.setState({
            loading: true
        });

        setTimeout(() => {
            this.setState({
                loading: false
            });
        }, 1000);
    }


    getNewQuote = () => {
        this.fakeLoading();
        axios.get("https://geek-jokes.sameerkumar.website/api").then((response) => {
            this.setState((prevState) => ({
                data: [...prevState.data, response.data]
            }));
        });
    }

    // getNewQuote = () => {
    //     this.fakeLoading();
    //     axios.get("https://geek-jokes.sameerkumar.website/api").then((response) => {
    //         // this.setState((prevState) => ({
    //         //     data: [...prevState.data, response.data]
    //         // });
    //     }
    // }

    render() {
        const { data, loading } = this.state;

        let output;

        if (loading == true) {
            output = <Loading />;
        }
        else if (data) {
            output = <Quotemachine array={this.state.data} limit={4} />
        }
        return (
            <section className="text-center m-4">Cool
                <button className="btn btn-primary" onClick={this.getNewQuote}>Press</button>
                {output}
            </section>
        )
    }
}