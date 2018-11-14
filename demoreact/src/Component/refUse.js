import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      data : ''
    }
    this.updateData = this.updateData.bind(this);
    this.clearInput = this.clearInput.bind(this);
  }
  updateData(e){
    this.setState({data: e.target.value});
  }
  clearInput(){
    this.setState({data: ''});
    ReactDOM.findDOMNode(this.refs.valueInput).focus();
  }
  render() {
    return (
      // call child component 
     <div>
        <input type="text" ref="valueInput" onChange= {this.updateData}/>
        <button onClick={this.clearInput}> Clear </button>
        <h1> {this.state.data}</h1>
     </div>
    );
  }
}




export default App;
