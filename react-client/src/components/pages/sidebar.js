import React, { Component } from 'react';

class SideBar extends Component {
  render() {
    let items;

    if(this.props.projects){
      items = this.props.projects.map(project => {
          return(
                  <ItemTile onDelete={this.deleteProject.bind(this)} key={project.title} project={project}/>
          )
      });
    }

    return (
        <div className="col-md-3 hidden-md-down">
          something naw i mean
        </div>
    )
  }
}

export default SideBar;
