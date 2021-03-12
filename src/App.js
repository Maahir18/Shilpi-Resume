import React from 'react';
import './App.css';
import Home from './components/Home';
import Experience from './components/Experience.js';
import Contact from './components/Contact.js';
import AboutMe from './components/AboutMe.js';
import Blogs from './Blogs/Blogs.js';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Logout from './Login/Logout';
import UAccount from './User_Account/UAccount';


function App() {
  return (
    <Router>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/Experience" component={Experience} />
      <Route exact path="/Contact" component={Contact} />
      <Route exact path="/AboutMe" component={AboutMe} />  
      <Route exact path="/Blogs/:id" component={Blogs} />  
      <Route exact path="/UserAccount" component={UAccount} />
      if(localStorage.getItem("token")){
      <Route exact path="/Logout" component={Logout} />
}
      
    </Switch>
    </Router>
  );
}

export default App;
