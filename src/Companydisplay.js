import React from 'react';
import './About.css';
import {companylist} from './companylist'

const Comapanydisplay = (props) => {
    const {companyname, companyaddress, duration, image, jobresponsibilities, job1, job2, job3} = props.listofcompany
    return (
        <div className="ex-page">
            <div className="company-image">
                <img src={image}/>
            </div>
            <div className="company-details">
            <span className="company-name"><b>{companyname}</b></span>
            <span className="company-address">{companyaddress}</span>
            <span>{duration}</span>
            <div className="duties">
            <p>{jobresponsibilities}</p>
            <p>{job1}</p>
            <p>{job2}</p>
            <p>{job3}</p>
            </div>
            </div>
        </div>
        
    );
}

export default Comapanydisplay;