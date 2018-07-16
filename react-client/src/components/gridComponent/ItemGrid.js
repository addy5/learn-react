import React, { Component } from 'react';
import ItemTile from './ItemTile';
import SideBar from './SideFilter';
import Placeholder from './Placeholder';

class Grid extends Component {
  render() {
    let items;
    let skeleton = [];
    var counter = 9;

    while(counter--){
        skeleton.push(
          <Placeholder />
        );
    }

    if(this.props.projects.length){
      items = this.props.projects.map(project => {
          return(
                  <ItemTile key={project.title} project={project}/>
          )
      });
    } else {
      items = 'No results found';
    }

    let title = this.props.query ? "Results for '" + this.props.query + "'" : 'Current Top Hits';

    return (
      <div className="row">
        <SideBar categories={this.props.categories} artists={this.props.artists}/>
        <div className="col-lg-9 col-sm-12 album bg-light">
          <div className="container">
            <div className="text-center row">
              <h3 className="grid-title"><strong>{title}</strong></h3>
            </div>
            <div id="skeleton" className="row">
              {skeleton}
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

Grid.propTypes = {
    projects: React.PropTypes.array
}

export default Grid;
