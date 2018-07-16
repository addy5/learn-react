import React, { Component } from 'react';
import $ from 'jquery';
import SideComponent from './SideComponent';

class SideBar extends Component {
  constructor() {
    super();
    this.filter = this.filter.bind(this);
  }

  filter(data){
    this.props.filterWithParams(data);
  }

  render() {
    let artists = [];
    let categories= [];

    if(this.props.artists){
     artists = <SideComponent onFilter={this.filter} type='artist' list={this.props.artists} title='Artists'/>
    }

    if(this.props.categories){
     categories = <SideComponent onFilter={this.filter} type='category' list={this.props.categories} title='Categories'/>
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
