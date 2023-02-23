import React, { Component } from 'react';
import EmployeeHtml from './EmployeeHtml';

export class Employee extends Component {

    state = {
        name: '',
        title: ''
    }

    constructor() {
        //The super() method refers to the parent class.
        // By calling the super() method in the constructor method,
        // we call the parent's constructor method and get access to the parent's properties and methods.
        super();

        this.state = {
            counter: 0,
        }
        this.setCounter = this.setCounter.bind(this);
    }

    render() {
        //return(<div>Employee page</div>)

        const { name, title } = this.state;
        return (
            <EmployeeHtml
                name1={name}
                title1={title}
                counter1={this.state.counter}
                setTitle1={this.setTitle}
                setName1={this.setName}
                setCounter={this.setCounter}
            />)
    }

    setName = evt => this.setState({ name: evt.target.value });
    setTitle = (evt) => this.setState({ title: evt.target.value });

    setCounter() {
        this.setState((prevState) => ({
            counter: prevState.counter + 1,
        }));
    }
}