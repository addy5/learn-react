import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import '../../dist/styles.scss';

import DataFactory from './dataComponent/MusicData';
import Grid from './gridComponent/grid.js';
import AddProject from './pages/AddProject';
import NavBar from './navComponent/navBar';
import Banner from './bannerComponent/banner';
import Footer from './footerComponent/footer.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
        projects : [],
        artists: {},
        category: {}
    }
  }

  setAppData(){
        let factory = new DataFactory();
        let data = factory.getHits().then(data => {
          this.setState({projects: data.hits});
          this.setState({artists: data.artists});
          this.setState({category: data.categories});

          return data;
        }).catch(err => {return err});
  }

  componentWillMount(){
      this.setAppData();
  }

  componentDidMount(){
    this.setAppData();
  }

  handleAddProject(project){
    let projects = this.state.projects;
    projects.push(project);
    this.setState({projects:projects});
  }

  handleDeleteProject(id){
    let projects = this.state.projects;
    let index = projects.findIndex(x => x.id === id);
    projects.splice(index, 1);
    this.setState({projects:projects});
    console.log(projects)
  }

  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <Banner />
          <Grid projects={this.state.projects} onDelete={this.handleDeleteProject.bind(this)}/>
          <Footer />
        </div>
      </Router>
    )
  }
}

export default App;
