import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom';
import TopMenu from './Component/TopMenu/TopMenu.js'
import Header from './Component/Header/Header.js'
import Content from './Component/Content/Content.js'
import Footer from './Component/Footer/Footer.js'
class App extends Component {
 
  render() {
    return (
      // call child component  
     <div>
        <TopMenu/>
        <Header/>
        <Content tieude="Su Dung Props voi Paul Duong11 " canhtrai="order-lg-2"  anh="img/01.jpg" trichdan="trich dan 1 paulduong"/>
        <Content tieude="Su Dung Props voi Paul Duong" anh="img/02.jpg" trichdan="trich dan 2 paulduong"/>
        <Content tieude="Su Dung Props voi Paul Duong 2" canhtrai="order-lg-2" anh="img/03.jpg" trichdan="trich dan 3 paulduong"/>
        <Footer/>
     </div>
    );
  } 
}

export default App;



