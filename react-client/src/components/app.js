import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import '../../dist/styles.scss';

import $ from 'jquery';
import Banner from './bannerComponent/AppBanner';
import DataFactory from './dataComponent/MusicData';
import Footer from './footerComponent/Footers.js';
import Grid from './gridComponent/ItemGrid.js';
import NavBar from './navComponent/MainNav';
import SideBar from './filterComponent/SideFilter';

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

    this.handleCustomJquery();
  }

  // add custom jquery/js for any exception handlers
  // todo: remove
  handleCustomJquery(){
    $('body').on('click','.burger',function(){
      console.log()
        $('.user-wrapper').toggleClass('show');
    });
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

  // filter results
  filterHits(data){
    let type = data['type'];
    let value = data['value'];

    // set value as search
    this.setState({query: value});

    // find matches
    let matches = this.state.allRecords.filter(data => {
      return data[type] === value;
    });

    this.setState({projects:matches});
  }

  // test query against all entries stored (just do a string string match)
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
          <div className="row">
            <SideBar filterWithParams={this.filterHits.bind(this)} categories={this.state.categories} artists={this.state.artists}/>
            <Grid artists={this.state.artists} categories={this.state.categories} query={this.state.query} projects={this.state.projects}/>
          </div>
          <Footer />
        </div>
      </Router>
    )
  }
}

export default App;
