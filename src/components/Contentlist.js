import React from 'react';
import '../css/About.css';

const Contentlist = (props) => {
    const {pageheading,pagecontent,lists,img,items, qualification} = props.listofarray
    return (
        <div className="abt-page">
            <h1>{pageheading}</h1><br/>
            <img src={img} alt="content-img"/>
            <div className="list-details">
                <h3>{lists}</h3>
                <span>{items}</span>
                <p>{pagecontent}</p><br/>
                <span>{qualification}</span>
            </div>
        </div>
    );
}

export default Contentlist;