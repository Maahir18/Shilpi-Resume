import React,{Component} from 'react';
import '../App.css';
import './UserPostForm.css'
import '../css/Footer.css';


class UserPostForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name:'',
            email:'',
            message:''
        }
    }
    

  
    render(){
        return (
            <div className="grid-container">
                <form >
                    <label>Name:</label>
                    <input type="text" id="name" required/>
                
                    <label>Email:</label>
                    <input type="email" id="email"  required/>
                
                    <label>Message:</label>
                    <input type="textarea" id="message" />

                    <input type="submit" className="addPost-btn" value="Add Post"/>
                </form>  
             </div>
        );
    }
}

export default UserPostForm;