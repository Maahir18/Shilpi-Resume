import React from 'react';
import './App.css';
import Home from './components/Home';
import Experience from './components/Experience.js';
import Contact from './components/Contact.js';
import AboutMe from './components/AboutMe.js';
import Blogs from './Blogs/Blogs.js';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';


function App() {
  return (
    <Router>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/Experience" component={Experience} />
      <Route exact path="/Contact" component={Contact} />
      <Route exact path="/AboutMe" component={AboutMe} />  
      <Route exact path="/Blogs" component={Blogs} />     
    </Switch>
    </Router>
  );
}

export default App;
