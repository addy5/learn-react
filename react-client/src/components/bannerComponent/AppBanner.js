import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Banner extends Component {
  render() {

    return (
      <div className="banner jumbotron">
        <div className="container">
          <h1 className="display-3">BeeTunes Radio</h1>
          <p>
            Browse the latest trending music! Sign up today and get updated when new hits are added =)
          </p>

        </div>
      </div>
    )
  }
}

export default Banner;
