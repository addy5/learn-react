import React, { Component } from 'react';
import FooterItem from './FooterLine';

class Footer extends Component {
  render() {
    let resources = [
      {value: 'Resource', href:'#'},
      {value: 'Resource name', href:'#'},
      {value: 'Another resource', href:'#'},
      {value: 'Final resource', href:'#'}
    ].map(function(data){
      return <FooterItem line={data} />
    });

    let about = [
      {value: 'Team', href:'#'},
      {value: 'Locations', href:'#'},
      {value: 'Privacy', href:'#'},
      {value: 'Terms', href:'#'}
    ].map(function(data){
      return <FooterItem line={data} />
    });

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
                {resources}
              </ul>
            </div>
            <div className="col-6 col-md">
              <h5 className="text-white">About</h5>
              <ul className="list-unstyled text-small">
                {about}}
              </ul>
            </div>
          </div>
        </footer>
      </div>
    )
  }
}

export default Footer;
