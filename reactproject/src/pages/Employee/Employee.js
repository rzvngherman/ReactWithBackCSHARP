import React, { Children, Component } from 'react';
import EmployeeHtml from './EmployeeHtml';

export class Employee extends Component {

    state = {
        name: '',
        title: ''
    }

    constructor() {
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
                name={name}
                title={title}
                counter={this.state.counter}
                setTitle={this.setTitle}
                setName={this.setName}
                setCounter={this.setCounter}
            />)
    }

    setName = (evt) => this.setState({ name: evt.target.value });
    setTitle = (evt) => this.setState({ title: evt.target.value });

    setCounter() {
        this.setState((prevState) => ({
            counter: prevState.counter + 1,
        }));
    }
}