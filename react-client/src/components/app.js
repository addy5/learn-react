import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import { browserHistory } from 'react-router';
import Skeleton from 'react-loading-skeleton';

import uuid from 'uuid';
import $ from 'jquery';

import HomePage from './pages/homePage.js';
import AddProject from './pages/AddProject';
import Header from './Header.js';
import NavBar from './headerComponent/navBar';
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

  getprojects(){
    $.ajax({
      url: ' https://itunes.apple.com/us/rss/topalbums/limit=100/json',
      dataType: 'json',
      cache: false,
      success: function(data){
        // let hits = data.feed.entry.map(hit => {
        //   var img = hit['im:image'].length ? hit['im:image'][2].label : '';
        //
        //   return {
        //     artist: hit['im:artist'].label,
        //     id: hit.id.label,
        //     img: img,
        //     price: hit['im:price'].label,
        //     title: hit['im:name'].label
        //   }
        // });

        let hits = [];
        let artists = {};
        let categories = {};

        data.feed.entry.forEach(function(hit){
          var artist =  hit['im:artist']['label'];
          var category = hit['category']['attributes']['label'];
          var img = hit['im:image'][2]['label'].replace('170x170bb', '300x300bb');

          hits.push({
            artist:artist,
            count:hit['im:itemCount']['label'],
            genre: hit['category']['attributes']['label'],
            id: hit['id']['label'],
            img: img,
            price: hit['im:price']['label'],
            title: hit['im:name']['label']
          })


          if(artists[artist]){
            artists[artist] = artists[artist] + 1;
          } else {
            artists[artist] = 1;
          }

          if(categories[category]){
            categories[category] = categories[category] + 1;
          } else {
            categories[category] = 1;
          }
        });

        console.log(data.feed.entry);
        this.setState({projects: hits});

        $('body').on('hover','.card',function () {
            $(this).addClass('hover');
        }, function () {
            $(this).removeClass('hover');
        });
      }.bind(this),
      error: function(xhr, status, err) {
          console.log('error!!!');
      }
    })
  }

  componentWillMount(){
      this.getprojects();
  }

  componentDidMount(){
    this.getprojects();
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
          <Header />
          <HomePage projects={this.state.projects || <Skeleton />} onDelete={this.handleDeleteProject.bind(this)}/>
          <Footer />
        </div>
      </Router>
    )
  }
}

export default App;
