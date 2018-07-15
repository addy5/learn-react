import React, { Component } from 'react';

class ItemTile extends Component {
  render() {
    return (
      <div className="col-md-4 col-sm-6">
        <div className="card mb-4 box-shadow">
            <h2 className="overlay"><p>Genre: {this.props.project.genre}</p>
            <p>Songs: {this.props.project.count}</p>
            <a target="_blank" href={this.props.project.id} className="btn btn-sm btn-outline-secondary">{this.props.project.price} on iTunes</a>
            </h2>
            <img className="card-img-top" src={this.props.project.img} alt="Card image cap" />
            <div className="card-body">
              <p className="card-text">
                <strong className="trunc">{this.props.project.title}</strong>
                <span className="trunc">{this.props.project.artist}
                </span>
              </p>
            </div>
          </div>
        </div>
    )
  }
}

ItemTile.propTypes = {
    project: React.PropTypes.object,
    onDelete: React.PropTypes.func
}

export default ItemTile;
