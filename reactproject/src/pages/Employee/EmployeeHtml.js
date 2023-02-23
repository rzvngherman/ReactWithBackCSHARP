import React, { Component } from 'react';

class EmployeeHtml extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        //return (<div>EmployeeHtml page</div>)
        const { name1, title1, setName1, setTitle1, counter1 } = this.props;

        return (
            <div className="App">
                <p>
                    Name1: {name1}
                </p>
                <p>
                    <input onChange={setName1} value={name1} />
                </p>
                <p>
                    Title: {title1}
                </p>
                <p>
                    <input onChange={setTitle1} value={title1} />
                </p>

                <p>Counter {counter1}</p>
                <button onClick={this.props.setCounter}>Add</button>

            </div>
        )
    }
}

export default EmployeeHtml;