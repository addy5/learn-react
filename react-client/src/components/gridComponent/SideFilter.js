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
          <div id="sidebar-wrapper">
            <ul className="sidebar-nav">
                <li className="sidebar-brand">
                    <a href="#">
                        Start Bootstrap
                    </a>
                </li>
                <li>
                    <a href="#">Dashboard</a>
                </li>
                <li>
                    <a href="#">Shortcuts</a>
                </li>
                <li>
                    <a href="#">Overview</a>
                </li>
                <li>
                    <a href="#">Events</a>
                </li>
                <li>
                    <a href="#">About</a>
                </li>
                <li>
                    <a href="#">Services</a>
                </li>
                <li>
                    <a href="#">Contact</a>
                </li>
            </ul>
        </div>
        </div>
    )
  }
}

export default SideBar;
