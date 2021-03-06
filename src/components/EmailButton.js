import React, {useState} from 'react';
import { useHistory } from "react-router-dom";
import Modal from 'react-modal'
import Login from '../Login/Login';




Modal.setAppElement('#root');
function EmailButton(props){
  

  const[modalIsOpen, setModalIsOpen] = useState(false);

   const callModal = () =>{
       console.log(modalIsOpen);
       if(!modalIsOpen){    
            setModalIsOpen(true);
       }
   }
  
    const history = useHistory();
    const routeChange = () =>{ 
      if(props.fromBlog) {
        let path = `/Blogs/1`; 
        history.push(path);
      }else {
        let path = `Contact`; 
        history.push(path);
      }
  }

    return(
        <div className="e-btn">
            <input type="button" value={props.value} className="email-button"
          onClick={routeChange, callModal} />
         
          <Modal isOpen={modalIsOpen} shouldCloseOnOverlayClick={false} onRequestClose={()=>setModalIsOpen(false)}>
                <Login/>  
          </Modal>
        </div>
    );
}

export default EmailButton;