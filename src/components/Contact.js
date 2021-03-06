import React,{Component} from 'react';
import '../App.css';
import '../css/Footer.css';
import Footer from './Footer.js';
import Introduction from './Introduction';
import EmailButton from './EmailButton';
import Navigation from './Navigation';
import axios from 'axios';  
//import emailjs from 'emailjs-com'

// function Contact(){
//     function sendEmail(e) {
//     e.preventDefault();

//     emailjs.sendForm('service_5b5zesc', 'template_fce6tgq', e.target, 'user_Y8xWpY16hbq3R7ZOBEYQU')
//       .then((result) => {
//           console.log(result.text);
//       }, (error) => {
//           console.log(error.text);
//       });
//       e.target.reset();
//   }
// return (
//             <div className="App">
//                 <header className="App-header"> 
//                     <Navigation />
//                     <Introduction name="SHILPI SHILPI"/><EmailButton value="Send Email"/>
//                 </header>
//                 <div className="abt-page abtme-page">
//                     <h1 className="contact-heading">Let's Connect</h1>
//                     <form onSubmit= {sendEmail}>
                        
//                             <label >Name:</label>
//                             <input type="text" id="name" name="name" required/>
                        
//                             <label>Email:</label>
//                             <input type="email" id="email" name="email" required/>
                        
//                             <label>Message:</label>
//                             <input type="textarea" id="message" name="message"/>

//                             <input type="submit" value="Submit"/>
//                     </form>
//                 </div>
//                 <Footer/>
//             </div>
        
//     );

// }



class Contact extends Component {
    constructor(props) {
        super(props);


        this.state = {
            name:'',
            email:'',
            message:''
        }
    }
    

    handleSubmit = (e) => {
        e.preventDefault();
       // console.log(this.state);

      
 const obj = {
           name: this.state.name,
           email:this.state.email,
           message:this.state.message
       };
       console.log(obj);
      
       axios.post('http://localhost:80/ReactPHPCRUD/contact.php', obj)
       .then(res=>console.log(res.data))
       .catch(err=>console.log(err));

       this.setState({
           name:'',
           email:'',
           message:''
       })
    }

    render(){
        
        return (
            <div className="App">
                <header className="App-header"> 
                    <Navigation />
                    <Introduction name="SHILPI SHILPI"/><EmailButton value="Send Email"/>
                </header>
                <div className="abt-page abtme-page">
                    <h1 className="contact-heading">Let's Connect</h1>
                    <form onSubmit={this.handleSubmit}>
                        
                            <label >Name:</label>
                            <input type="text" id="name" value={this.state.name}  onChange={e => this.setState({ name: e.target.value })} required/>
                       
                            <label>Email:</label>
                            <input type="email" id="email" value={this.state.email}
                            onChange={e => this.setState({ email: e.target.value })} required/>
                        
                            <label>Message:</label>
                            <input type="textarea" id="message" onChange={e => this.setState({ message: e.target.value })}
                            value={this.state.message}/>

                            <input type="submit" value="Submit"/>
                    </form>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default Contact;