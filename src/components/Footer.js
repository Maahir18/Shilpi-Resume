import React from 'react';
import '../css/Footer.css';

function Footer(){
    return (
        <div className="footer">
           <h1>Let's Stay in touch</h1>
           <div className="social-links">
               
               <a href = {'https://facebook.com/'}><img src={require('../images/facebook.png')} alt="img1"/></a>
               <a href = {'https://linkedIn.com/'}><img src={require('../images/linkedIn.png')} alt="img2"/></a>
               <a href = {'https://googleplus.com/'}><img src={require('../images/googleplus.png')} alt="img3"/></a>
           </div><br/>
               
            <span>copyright 2020</span>
        
        </div>
    );
}

export default Footer;