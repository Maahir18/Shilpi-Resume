import React from 'react';
import Contentlist from './Contentlist';
import {listarray} from './listarray'
import Project from './Project'

const About = (props) => {
    const detaillist = listarray.map((listofarray, i)=> {
        // return <Contentlist key={listarray[i].id} pageheading={listarray[i].pageheading} image={listarray[i].image} pagecontent={listarray[i].pagecontent}/>
        return  <Contentlist key= {listarray[i].id} listofarray = {listofarray} />
    });

    return (
        <div>
            <div className="mrg-top">
                {detaillist}
                
            </div>
            <div className="abt-page project-page">
                <Project/>

            </div>
        </div>
    );
}

export default About;