import React, {useState} from 'react';
import './Navigation.css';
import { Link } from "react-router-dom";
import './AboutMe';
import { useHistory } from "react-router-dom";
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
    


const Navigation = ()=>{

    const [appState,changeState] = useState({
        activeObject:null,
        objects:[
            {id:1,
            name:"Home",   
            to:"/"
            },
            {id:2,
            name:"About",
            to:"/AboutMe"
            },
            {id:3,
            name:"Contact",
            to:"/Contact",
            },
            {id:4,
            name:"Experience",
            to:"/Experience"
            }]
    })
    

    function toggleClass(index){
        changeState({...appState,activeObject:appState.objects[index]});
    }

    function toggleClassStyle(index){
        if(appState.objects[index]===appState.activeObject){
            return "active" ;
        }
        else {
            return "none";
        }
    }

    
    const list =   appState.objects.map ((elements,index) => (
                    <li key={index} className={toggleClassStyle(index)} onClick={()=>{toggleClass(index)}}><b>
                        <Link to={appState.objects[index].to}>{appState.objects[index].name}</Link></b></li>
    ));

    function jsPDFGenerator() {
        
        var doc = new jsPDF('p','pt');

        doc.text(20,20,'This is the text');

        doc.save("pdf_file");
       
    }

    return (
        <div>
            <nav>
                <h1>Website Name</h1>
                <div className="nav-list">
                    <ul>
                    {list}
                    <button className="Sb_btn" onClick={()=>{jsPDFGenerator()}}>Resume</button>
                    </ul>
                </div>
            </nav>
            <div id="resume-data">
                This is the document
            </div>
        </div>
    );
}

export default Navigation;