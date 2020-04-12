import React, { Component } from 'react';
import './Header.css';
import { HashRouter as Router, Link } from 'react-router-dom';
import ResponsiveDrawer from '../../containers/ResponsiveDrawer';

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <Router>
          <ResponsiveDrawer className="ResponsiveDrawer">
            <li>
              <Link to="/">top</Link>
            </li>
            <li>
              <Link to="/about/">about</Link>
            </li>
            <li>
              <Link to="/skill/">skill</Link>
            </li>
            <li>
              <Link to="/work/">work</Link>
            </li>
            <li>
              <Link to="/contact/">contact</Link>
            </li>
          </ResponsiveDrawer>
        </Router>
      </div>
    );
  }
}

export default Header;
