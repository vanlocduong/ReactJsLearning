import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: " data start is 1"
        }
        this.onChildComponent = this.onChildComponent.bind(this);
    }

    onChildComponent() {
        this.setState({
            data: " data is updated 2"
        })
    }
    render() {
        return (
            // call child component 
            <div>
                <Content dataInput={this.state.data} childComponent={this.onChildComponent}></Content>
            </div>
        );
    }
}


class Content extends Component {
    render() {
        return (
            <div>
                <button onClick={this.props.childComponent}> Click</button>
                <h3>{this.props.dataInput}</h3>
            </div>
        );
    }
}


export default App;
