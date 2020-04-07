import React from 'react';
import './Main.css';
import {
    HashRouter as Router,
    Route,
    Link
  } from "react-router-dom";
  import Top from '../Top/Top';
  import About from '../About/About';
  import Skill from '../Skill/Skill';
  import Work from '../Work/Work';
  import Contact from '../Contact/Contact';


function Main() {
  return (
    <div className="main">
    <Router>
      <Route path="/" exact component={Top} />
      <Route path="/about/" exact component={About} />
      <Route path="/skill/" exact component={Skill} />
      <Route path="/work/" exact component={Work} />
      <Route path="/contact/" exact component={Contact} />
    </Router>
    
    </div>
    
  );
}



  export default Main;