import React, { Component } from 'react';

class EmployeeHtml extends Component {

    constructor() {
        super();
    }

    render() {
        //return (<div>EmployeeHtml page</div>)

        return (
            <div className="App">
                <p>
                    Name: {this.props.name}
                </p>
                <p>
                    <input onChange={this.props.setName} value={this.props.name} />
                </p>
                <p>
                    Title: {this.props.title}
                </p>
                <p>
                    <input onChange={this.props.setTitle} value={this.props.title} />
                </p>

                <p>Counter {this.props.counter}</p>
                <button onClick={this.props.setCounter}>Add</button>

            </div>
        )
    }
}

export default EmployeeHtml;