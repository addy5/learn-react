import React, { Component } from 'react';

class ItemTile extends Component {
  deleteProject(id){
    this.props.onDelete(id);
    console.log('testing delete' + id);
  }

  render() {
    console.log(this.props.project);
    return (
      <div className="col-md-4 col-sm-6">
        <div className="card mb-4 box-shadow">
            <img className="card-img-top" src={this.props.project.img} alt="Card image cap" />
            <div className="card-body">
              <p className="card-text">
                <strong className="trunc">{this.props.project.title}</strong>
                <span className="trunc">{this.props.project.artist}
                </span>
              </p>
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                  <a target="_blank" href={this.props.project.id} className="btn btn-sm btn-outline-secondary">{this.props.project.price} on iTunes</a>
                </div>
                <a href="#" onClick={this.deleteProject.bind(this, this.props.project.id)}>
                  ℹ
                </a>
              </div>
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
