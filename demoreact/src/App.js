import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      data : [
        {
          component: "first",
          id : 1
        },
         {
          component: 'second',
          id: 2
        },
         {
          component: "third",
          id: 3
        }
      ]
    }
   
  }
 
  render() {
    return (
      // call child component 
     
     <div>
          {this.state.data.map((giatribandau, index )=>
          <Content key={index} dataComponent={giatribandau}/>
          )}
     </div>
    );
  } 
}

class Content extends Component {
  render() {
    return (
      <div>
        <div>
          {this.props.dataComponent.id}
        </div>
        <div>{this.props.dataComponent.component}</div>
      </div>
    );
  }
}

export default App;



