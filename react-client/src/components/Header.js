import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

class NavBar extends Component {
  render() {

    return (
      <div className="banner jumbotron">
        <div className="container">
          <h1 className="display-3">WeeHeart Radio</h1>
          <p>
            Browse the latest trending music!
          </p>

        </div>
      </div>
    )
  }
}

export default NavBar;
