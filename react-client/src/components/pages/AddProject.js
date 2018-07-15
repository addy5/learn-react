import React, { Component } from 'react';
import uuid from 'uuid';

class AddProject extends Component {
  constructor() {
    super();
    this.state = {
      newProject: {}
    }
  }


  handleSubmit(e){
    e.preventDefault();

    if(this.refs.title.value === ''){
      alert('Title is required')
    } else {
      this.setState({newProject: {
        id: uuid.v4(),
        title: this.refs.title.value,
        artist: this.refs.artist.value
      }}, function(){
        // console.log(this.state);
        this.props.addProject(this.state.newProject);
      })
    }
  }

  render() {
    this.props.artist = ['hip hop', 'r&b', 'jazz'];

    let categoryOtions = this.props.artist.map(artist => {
      return <option key={artist} value={artist}>{artist}</option>
    })

    return (
      <div classNames="Projects">
        <h3>Add Project</h3>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div>
            <label>Title</label> <br/>
            <input type="text" ref="title"/>
          </div>
          <div>
            <label>Artist</label> <br/>
            <select ref="artist">
              {categoryOtions}
            </select>
          </div>
          <br />
          <input type="submit" value="Submit"/>
          <br />
        </form>
      </div>
    )
  }
}

AddProject.propTypes = {
    addProject: React.PropTypes.func
}

export default AddProject;
