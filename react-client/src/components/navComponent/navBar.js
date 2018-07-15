import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

class NavBar extends Component {
  render() {

    return (
          <nav className="navbar navbar-toggleable-md navbar-inverse fixed-top bg-inverse">
            <a className="navbar-brand" href="#">Navbar</a>
            <a className="navbar-brand" href="#">Home</a>
            <a className="navbar-brand" href="#">Trending</a>

            <div className="collapse navbar-collapse" id="navbarsExampleDefault">
               <ul className="navbar-nav mr-auto">
               </ul>

               <button className="sign-in">Sign In</button>
               <button className="join">Join Now</button>
            </div>
          </nav>
        );
  }
}

export default NavBar;
