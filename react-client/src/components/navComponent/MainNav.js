import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

class NavBar extends Component {
  constructor() {
    super();
    this.state = {
      search: null,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange({ target }){
    this.setState({
      search: target.value
    });
  }

  handleSearch(){
    this.props.onSearch(this.state.search);
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.onSearch(this.state.search);
  }

  render() {
    return (
          <nav className="navbar navbar-toggleable-md navbar-inverse fixed-top">
            <div className="col-sm-9 col-xs-8">
              <form onSubmit={this.handleSubmit} className="form-inline">
                <a href="/">
                  <img className="logo" src="../../assets/pin.png" alt="" width="24" height="24" />
                </a>
                <input className="search form-control" onChange={ this.handleChange }  type="search" placeholder="Search.." aria-label="Search" />
                <button className="btn search my-2 my-sm-0" type="" onClick={this.handleSearch}>&#x1F50D;</button>
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
