import React from 'react';
import { useHistory } from "react-router-dom";
// const email_me = () => {
//     alert("On click of a button");                 //()=>email_me()
// }



function EmailButton(props){
    const history = useHistory();

    const routeChange = () =>{ 
    let path = `Contact`; 
    history.push(path);
  }

    return(
        <div className="e-btn"><input type="button" value={props.value} className="email-button"
         onClick={routeChange}/></div>
    );
}

export default EmailButton;