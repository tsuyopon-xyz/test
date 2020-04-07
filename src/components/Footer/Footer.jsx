import React from 'react';
import './Footer.css';
import Sns from '../Sns/Sns';
import {
    HashRouter as Router,
    Route,
    Link
} from "react-router-dom";
//   import Top from '../Top/Top';
//   import About from '../About/About';
//   import Skill from '../Skill/Skill';
//   import Work from '../Work/Work';
//   import Contact from '../Contact/Contact';


  function Footer() {
   return(
    <div className="footer">
     <Router>
     <nav>
     <ul>
     <li><Link to="/">top</Link></li>
        <li><Link to="/about/">about</Link></li>
        <li><Link to="/skill/">skill</Link></li>
        <li><Link to="/work/">work</Link></li>
        <li><Link to="/contact/">contact</Link></li>
     </ul>
     </nav>
     {/* <Route path="/" exact component={Top} />
      <Route path="/about/" exact component={About} />
      <Route path="/skill/" exact component={Skill} />
      <Route path="/work/" exact component={Work} />
      <Route path="/contact/" exact component={Contact} /> */}
    </Router>

    <Sns />
    </div>
   );
  }


  export default Footer;