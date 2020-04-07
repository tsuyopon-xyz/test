import React, { Component } from 'react';
import './Header.css';
import {
    HashRouter as Router,
    Route,
    Link
  } from "react-router-dom";
  import ResponsiveDrawer from '../../containers/ResponsiveDrawer';

  // import Top from '../Top/Top';
  // import About from '../About/About';
  // import Skill from '../Skill/Skill';
  // import Work from '../Work/Work';
  // import Contact from '../Contact/Contact';


// function Header() {
//   return (
//     <div className="header">
      {/* <Router>
      <nav>
      <ul>
        <li><Link to="/">top</Link></li>
        <li><Link to="/about/">about</Link></li>
        <li><Link to="/skill/">skill</Link></li>
        <li><Link to="/work/">work</Link></li>
        <li><Link to="/contact/">contact</Link></li>
      </ul>
      </nav>
    </Router> */}

    {/* <ResponsiveDrawer className="ResponsiveDrawer">
      <Router> 
            <Route path="/" component={WrapMainContent(Top)} />
            <Route path="/about/" exact component={WrapMainContent(About)} />
            <Route path="/skill/" exact component={WrapMainContent(Skill)} />
            <Route path="/work/" exact component={WrapMainContent(Work)} />
            <Route path="/contact/" exact component={WrapMainContent(Contact)} />
        </Router>
    </ResponsiveDrawer> */}

    class Header extends Component {
      render() {
        return (
          <div className="Header">
            <Router> 
              <ResponsiveDrawer className="ResponsiveDrawer">
              <li><Link to="/">top</Link></li>
              <li><Link to="/about/">about</Link></li>
              <li><Link to="/skill/">skill</Link></li>
              <li><Link to="/work/">work</Link></li>
              <li><Link to="/contact/">contact</Link></li>
              </ResponsiveDrawer>
            </Router>
            
          </div>
        );
      }
      }

    
    // </div>
    
  // );
// }




// import { Link } from "react-router-dom";
// function Header() {
//     return (
//       <div className="header">
//         <Navigation>
//         <ul>
//           <li><Link to="/">top</Link></li>
//           <li><Link to="/about/">about</Link></li>
//           <li><Link to="/skill/">skill</Link></li>
//           <li><Link to="/work/">work</Link></li>
//           <li><Link to="/contact/">contact</Link></li>
//         </ul>
//         </Navigation>

//           <Drawer
//             title={
//               <Link style={{ textDecoration: "none", color: "black" }} to="/">
//                 My Portfolio
//               </Link>
//             }
//           >
//           <Navigation>
//             <ul>
//               <li><Link to="/">top</Link></li>
//               <li><Link to="/about/">about</Link></li>
//               <li><Link to="/skill/">skill</Link></li>
//               <li><Link to="/work/">work</Link></li>
//               <li><Link to="/contact/">contact</Link></li>
//             </ul>
//           </Navigation>
//           </Drawer>
//       </div>
//     );
// }


  export default Header;