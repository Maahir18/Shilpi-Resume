import React from 'react';
import './App.css';
import Home from './Home';
import Experience from './Experience.js';
import Contact from './Contact.js';
import AboutMe from './AboutMe.js';
import {Route,Switch} from 'react-router-dom';
import {BrowserRouter} from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/Experience" component={Experience} />
      <Route exact path="/Contact" component={Contact} />
      <Route exact path="/AboutMe" component={AboutMe} />      
    </Switch>
    </BrowserRouter>
  );
}

export default App;
