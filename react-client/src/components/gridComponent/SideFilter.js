import React, { Component } from 'react';
import $ from 'jquery';
import SideComponent from './SideComponent';

class SideBar extends Component {
  render() {
    let artists = [];
    let categories= [];

    if(this.props.artists){
     artists = <SideComponent list={this.props.artists} title='Artists'/>
    }

    if(this.props.categories){
     categories = <SideComponent list={this.props.categories} title='Categories'/>
    }

    return (
        <div className='col-md-3 hidden-md-down'>
          <div id='sidebar-wrapper'>
            <ul className='sidebar-nav'>
                {artists}
                {categories}
            </ul>
        </div>
        </div>
    )
  }
}

export default SideBar;
