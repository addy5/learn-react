import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import '../../dist/styles.scss';

import $ from 'jquery';

import DataFactory from './dataComponent/MusicData';
import Grid from './gridComponent/Grid.js';
import NavBar from './navComponent/navBar';
import Banner from './bannerComponent/banner';
import Footer from './footerComponent/Footer.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
        allRecords: [],
        projects: [],
        artists: {},
        categories: {},
        query: ''
    }
  }

  // initialize data
  setAppData(){
        let factory = new DataFactory();
        let data = factory.getHits().then(data => {
          this.setState({projects: data.hits});
          this.setState({artists: data.artists});
          this.setState({allRecords: data.hits});
          this.setState({categories: data.categories});
          $('#skeleton').fadeOut(250);

          return data;
        }).catch(err => {return err});
  }

  componentWillMount(){
      this.setAppData();
  }

  componentDidMount(){
    this.setAppData();
  }

  // test query against all entries stored
  searchHits(query){
    this.state.query = query.toLowerCase();
    let matches = this.state.allRecords.filter(data => {
      var jsonString = JSON.stringify(data).toLowerCase();

      return jsonString.indexOf(this.state.query) !== -1;
    });

    this.setState({projects:matches});
  }

  render() {
    return (
      <Router>
        <div>
          <NavBar onSearch={this.searchHits.bind(this)}/>
          <Banner />
          <Grid artists={this.state.artists} categories={this.state.categories} query={this.state.query} projects={this.state.projects}/>
          <Footer />
        </div>
      </Router>
    )
  }
}

export default App;
