import React from 'react';
import '../App.css';
import Introduction from './Introduction';
import EmailButton from './EmailButton';
import Navigation from './Navigation';
import About from './About';
import Footer from './Footer.js';
import { Component } from 'react';
import { Redirect } from 'react-router';

class Home extends Component {
  constructor(props){
      super(props);
      const token = localStorage.getItem("token");
      let isSignedIn =  true
      if(token == null){
        isSignedIn = false
      }

      this.state ={
        isSignedIn
      }
  }
  render(){
    
    return (
        <div className="App">
          <header className="App-header"> 
              <Navigation />
              <Introduction name="SHILPI SHILPI"/><EmailButton value="Send Email"/>
          </header>
          <About/>            
        <Footer/>
        </div>
    );
    
    }
}

export default Home;