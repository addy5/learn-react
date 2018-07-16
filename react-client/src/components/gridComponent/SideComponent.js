import React, { Component } from 'react';
import $ from 'jquery';

class SideComponent extends Component {
  render() {
    let list = [];

    if(this.props.list){
      $.each(this.props.list, function( index, value ) {
        list.push(
          <li className="sidebar-brand">
            <a href="#">
                {index} ({value})
            </a>
          </li>
        );
      });
    }

    return (
      <div>
          <h4 className="sidebar-title">
                  {this.props.title}
          </h4>
          {list}
      </div>
    )
  }
}

export default SideComponent;
