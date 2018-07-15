import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Banner extends Component {
  render() {

    return (
      <div className="banner jumbotron">
        <div className="container">
          <h1 className="display-3">BeeHeart Radio</h1>
          <p>
            Browse the latest trending music!
          </p>

        </div>
      </div>
    )
  }
}

export default Banner;
