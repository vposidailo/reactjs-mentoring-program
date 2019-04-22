import React from 'react';
import { PropTypes } from 'react'
import Header from '../root/components/header/header';
import Footer from '../root/components/footer/footer';
import Search from '../search/search';
import MovieTileGallary from '../movie-gallary/movie-gallary-root/movie-gallary-root';
import MovieInfoDescription from '../movie-gallary/movie-gallary-info/movie-gallary-info';

import './app.css';

const API = 'https://reactjs-cdp.herokuapp.com/movies';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: [],
    };

    this.applyNewSearch = this.applyNewSearch.bind(this);
  }

  applyNewSearch(search_value, search_by_value, sortBy) {
    this.setState({search: search_value, searchBy: search_by_value});
    fetch(API + '?search=' + search_value + '&searchBy=' + search_by_value + '&sortBy=' + sortBy + '&sortOrder=asc')
      .then(response => response.json())
      .then(payload => this.setState({ movies: payload.data }));
  }

  render() {
    return (
    <div>
      <div className="app-layout">
        <Header key="movie-header" />
        <Search key="movie-search" applyNewSearch={this.applyNewSearch} found_count={this.state.movies.length}/>
        {/* <MovieInfoDescription key="movie-info-description" id = "335777" /> */}
        <MovieTileGallary key="movie-gallary" movies={this.state.movies} />
      </div>
      <Footer key="movie-footer" />
    </div>
    );
  }
}
