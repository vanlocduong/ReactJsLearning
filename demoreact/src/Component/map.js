import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom';

const so = [1, 2, 3, 4, 5];
const dsxehoi = ["xedien", "xemay", "xehoi"];

const so2 = so.map((index) => (
    index * 2 + ""
));
const so3 = dsxehoi.map((index) => (
    <div>
        <ul> {index}
            <li>{index}</li>
        </ul>
    </div>

));

class App extends Component {

    render() {
        return (
            // call child component  
            <div>
                {so3}
            </div>
        );
    }
}

export default App;



