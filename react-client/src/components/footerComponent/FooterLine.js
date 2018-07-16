import React, { Component } from 'react';

class FoorterItem extends Component {
  render() {
    return (
      <li><a className="text-muted" href={this.props.line.href}>{this.props.line.value}</a></li>
    )
  }
}

FoorterItem.propTypes = {
    href: React.PropTypes.str,
    value: React.PropTypes.str
}

export default FoorterItem;
