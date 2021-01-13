import React from 'react';
import './Footer.css';
import {BrowserRouter as Router, Link } from 'react-router-dom';

function Footer(){
    return (
        <div className="footer">
           <h1>Let's Stay in touch</h1>
           <div className="social-links">
               
               <a href = {'https://facebook.com/'}><img src={require('./images/facebook.png')}/></a>
               <a href = {'https://linkedIn.com/'}><img src={require('./images/linkedIn.png')}/></a>
               <a href = {'https://googleplus.com/'}><img src={require('./images/googleplus.png')}/></a>
           </div><br/>
               
            <span>copyright 2020</span>
        
        </div>
    );
}

export default Footer;