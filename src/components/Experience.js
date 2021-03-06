import React from 'react'
import '../App.css'
import '../css/Footer.css'
import Footer from './Footer.js';
import Introduction from './Introduction'
import EmailButton from './EmailButton'
import Navigation from './Navigation'
import Companydisplay from './Companydisplay'
import {companylist} from './companylist'

const Experience = (props) => {
   
    const listarrayofcompany = companylist.map((listofcompany, i)=> {
               return <Companydisplay key= {companylist[i].id} listofcompany = {listofcompany}/>
    });
    return(
        <div className="App">
            <header className="App-header"> 
                <Navigation />
                <Introduction name="SHILPI SHILPI"/><EmailButton value="Send Email"/>
            </header>
            <div className="abt-page abtme-page">
                <h1 className="contact-heading">Work Experience</h1>
                {listarrayofcompany}    
            </div>
            
            <Footer/>
        </div>
    );
}

export default Experience;