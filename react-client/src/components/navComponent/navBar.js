import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

class NavBar extends Component {
  render() {

    return (
          <nav className="navbar navbar-toggleable-md navbar-inverse fixed-top bg-inverse">
            <div className="col-sm-6">
              <form className="form-inline">
                <input className="search form-control" type="search" placeholder="Audiophile seeking.." aria-label="Search" />
                <button className="btn search my-2 my-sm-0" type="submit">Search</button>
              </form>
            </div>

            <div className="collapse navbar-collapse">
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
