import React from 'react';
import '../App.css';
import Introduction from './Introduction';
import EmailButton from './EmailButton';
import Navigation from './Navigation';
import About from './About';
import Footer from './Footer.js';

function Home() {
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

export default Home;