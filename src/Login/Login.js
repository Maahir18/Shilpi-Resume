import e from 'cors';
import React,{Component} from 'react'
import './Login.css'
import axios from 'axios'

class Login extends Component {
    constructor(props) {
        super(props);


        this.state = {
            email:'',
            password:''
        }
    }
    

    handleSubmit = (e) => {
        e.preventDefault();
       // console.log(this.state);

      
    const obj = {
            email:this.state.email,
            password:this.state.password
        };
       console.log(obj);
      
       axios.post('http://localhost:80/ReactPHPCRUD/login.php', obj)
       .then(res=>console.log(res.data))
       .catch(err=>console.log(err));

       this.setState({
           email:'',
           password:''
       })
    }

    render(){
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