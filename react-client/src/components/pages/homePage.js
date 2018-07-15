import React, { Component } from 'react';
import ItemTile from './ItemTile';
import SideBar from './SideBar';

class HomePage extends Component {
  deleteProject(id){
    this.props.onDelete(id);
  }

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
      <div className="row">
        <SideBar />
        <div className="col-md-9 col-sm-12 album bg-light">
          <div className="container">
            <div className="text-center row">
              <h3 className="grid-title">Current Top Hits</h3>
            </div>
            <div className="row">
              {items}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

HomePage.propTypes = {
    projects: React.PropTypes.array,
    onDelete: React.PropTypes.func
}

export default HomePage;
