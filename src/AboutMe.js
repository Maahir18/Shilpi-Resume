import React from 'react';
import './App.css';
import Introduction from './Introduction';
import EmailButton from './EmailButton';
import Navigation from './Navigation';

import Footer from './Footer';

function AboutMe(){
    return (
        <div className="App">
            <header className="App-header"> 
                <Navigation />
                <Introduction name="SHILPI SHILPI"/><EmailButton value="Send Email"/>
            </header>
            <div className="abt-page abtme-page">
                <h1>About Page</h1>
                <p>Hello! I am Shilpi, a Student at Vanier College, Montreal, Quebec.</p>
                <p>I enjoy creating and supporting things which live on internet like, websites, applications.
                    I relish developing work which make things simple and sorted to everyone.</p>
                <p>Shortly after completing my masters from Kukrushetra University in India. I gained some IT industry experience
                    with renowned IT firms in Central Delhi.
                </p>
                <ul class="skills-list">
                    <li>JavaScript (ES6+)</li>
                    <li>HTML &amp; CSS</li>
                    <li>React</li><li>Java</li>
                    <li>Boostrap</li>
                    <li>WordPress</li>
                </ul>
            </div>
        <Footer/>
        </div>    
    );
}

export default AboutMe;