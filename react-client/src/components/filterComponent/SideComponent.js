import React, { Component } from 'react';
import $ from 'jquery';

class SideComponent extends Component {
  constructor() {
    super();
    this.clickFilter = this.clickFilter.bind(this);
  }

  clickFilter(target) {
    this.props.onFilter(target);
  }

  render() {
    let list = [];
    let scopeSelf = this;

    if(this.props.list){
      // sort object keys
      let keys = Object.keys(this.props.list).sort();
      let map = this.props.list;

      $.each(keys, function(index, value) {
        var count = map[value];
        let handleClick = () => {
          scopeSelf.clickFilter({
            value: value,
            type: scopeSelf.props.type
          });
        };

        list.push(
          <li className="sidebar-brand">
            <a href="#" onClick={handleClick}>
                {value} ({count})
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
