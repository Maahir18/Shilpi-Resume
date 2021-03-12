import React,{Component} from 'react'
import './Login.css'
import axios from 'axios'
import {Redirect} from 'react-router-dom'

class Login extends Component {
    
    constructor(props) {
    const token = localStorage.getItem("token");

      let isSignedIn =  true
      if(token == null){
        isSignedIn = false
      }
        super(props);

        this.state = {
            email:'',
            password:'',
            isSignedIn

        }
        
    }
    

    handleSubmit = (e) => {
        e.preventDefault();
      
    const obj = {
            email:this.state.email,
            password:this.state.password
        };
       console.log(obj);
      
       axios.post('http://localhost:80/ReactPHPCRUD/login.php', obj)
       .then(res=>{
                console.log(res.data[1].firstname);
                localStorage.setItem("token", res.data[1].firstname);
                
                this.handleShow();
            }
       )
       .catch(err=>console.log(err));

       this.setState({
           email:'',
           password:''
       })
    }

    handleShow=()=>{
        if(!this.state.isSignedIn){
           this.setState({
                    isSignedIn: true
                })
                console.log(this.state.isSignedIn);
       }
       if(this.props.setModalIsOpen){
           this.props.setModalIsOpen(false);
       } 
        

    }
    

    render(){
        
        if(this.state.isSignedIn){
            return <Redirect to="/UserAccount"/>
        }
    return (
        <div className="modal-styling">            
            <h1>Login In or Register</h1>
            <form onSubmit={this.handleSubmit}>
                <label>Email:</label>
                <input type="email" id="email" value={this.state.email}
                            onChange={e => this.setState({ email: e.target.value })} required/>
            
                <label>Password:</label>
                <input type="password" id="password" value={this.state.password}
                            onChange={e => this.setState({ password: e.target.value })} required/>

                <input type="submit" value="Login"/>
                <label>OR</label>
                <input type="submit" value="Register"/>
            </form>
        </div>
    )
    
}

}
export default Login;