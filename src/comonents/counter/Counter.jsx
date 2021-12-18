import React, { Component } from "react";
import './Counter.css'

class Counter extends Component {

    //define the initial state in constructor

    constructor() {
        super(); //call super method in order to use 'this' keyword

        this.state = {
            counter: 0
        }

        this.increment = this.increment.bind(this);
        this.double = this.double.bind(this);
        this.minusTwo = this.minusTwo.bind(this);
        this.decrement = this.decrement.bind(this);

    }


    render() {
        return (
            <div className="counter">
                <button onClick={this.increment}>+1</button>
                <button onClick={this.double}>+2</button>
                <button onClick={this.decrement}>-1</button>
                <button onClick={this.minusTwo}>-2</button>
                <span className="count">{this.state.counter}</span>
            </div>
        )
    }
    increment() {
        this.setState({
            counter: this.state.counter + 1
        });
    }
    double() {
        this.setState({
            counter: this.state.counter + 2
        });
    }
    decrement() {
        this.setState({
            counter: this.state.counter - 1
        });
    }
    minusTwo() {
        this.setState({
            counter: this.state.counter - 2
        });
    }
}




export default Counter;