import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <div id="footer-container">
      <footer className="pt-4 border-top col-md-9">
          <div className="row">
            <div className="col-12 col-md">
              <img className="mb-2" src="../../assets/pin.png" alt="" width="24" height="24" />
              <small className="d-block mb-3 text-muted">&copy; 2017-2018</small>
            </div>
            <div className="col-6 col-md">
              <h5 className="text-white">Resources</h5>
              <ul className="list-unstyled text-small">
                <li><a className="text-muted" href="#">Resource</a></li>
                <li><a className="text-muted" href="#">Resource name</a></li>
                <li><a className="text-muted" href="#">Another resource</a></li>
                <li><a className="text-muted" href="#">Final resource</a></li>
              </ul>
            </div>
            <div className="col-6 col-md">
              <h5 className="text-white">About</h5>
              <ul className="list-unstyled text-small">
                <li><a className="text-muted" href="#">Team</a></li>
                <li><a className="text-muted" href="#">Locations</a></li>
                <li><a className="text-muted" href="#">Privacy</a></li>
                <li><a className="text-muted" href="#">Terms</a></li>
              </ul>
            </div>
          </div>
        </footer>
      </div>
    )
  }
}

export default Footer;
