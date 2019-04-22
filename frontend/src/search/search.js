import React from 'react';
import { PropTypes } from 'react'

import './search.css';

export default class Search extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      search_value: '',
      search_by_value: 'title',
      sort_by: 'release_date',
    };

    this.searchMovies = this.searchMovies.bind(this);
    this.searchByTitle = this.searchByTitle.bind(this);
    this.searchByGender = this.searchByGender.bind(this);
    this.sortByDate = this.sortByDate.bind(this);
    this.sortByRating = this.sortByRating.bind(this);
    this.newSearchSubmitted = this.newSearchSubmitted.bind(this);
  }

  searchMovies(evt) {
    evt.persist();
    this.setState(state => ({ search_value: evt.target.value }));
  }

  newSearchSubmitted() {
    this.props.applyNewSearch(this.state.search_value, this.state.search_by_value, this.state.sort_by);
  }

  searchByTitle(evt) {
    console.log(evt.target.value);
    evt.persist();
    this.setState({ search_by_value: evt.target.value });
  }

  searchByGender(evt) {
    console.log(evt.target.value);
    evt.persist();
    this.setState({ search_by_value: evt.target.value });
  }

  sortByDate(evt) {
    console.log(evt.target.value);
    evt.persist();
    this.setState({ sort_by: evt.target.value });
  }

  sortByRating(evt) {
    console.log(evt.target.value);
    evt.persist();
    this.setState({ sort_by: evt.target.value });
  }

  render() {
    return (
    <div className="movie-search-container">
      <div>
        <div className="search-title">
            <span>FIND YOUR MOVIE</span>
        </div>
        <input className="search-input" type="text" onChange = {this.searchMovies}/>
      </div>
      <div className="search-action-layout">
        <div className="search-by-container">
          <span>SEARCH BY</span>
          <div className="search-search-by-container">
            <input type="radio" id="search_by_title" name="search_by" value="title" className="radio-btn" defaultChecked onChange={this.searchByTitle} />
            <label for="search_by_title" className="search-lable">TITLE</label>
            <input type="radio" id="search_by_gender" name="search_by" value="gender" className="radio-btn" onChange={this.searchByGender} />
            <label for="search_by_gender" className="search-lable">GENDER</label>
          </div>
        </div>
        <div>
          <button className="search-action-btn" type="button" onClick={this.newSearchSubmitted}>SEARCH</button>
        </div>
      </div>
      <div className="movie-search-result">
          <div className="movie-search-count-result">
            <span>{this.props.found_count} movies found</span>
          </div>
          <div className="movie-search-sorting-container">
            <span>Sort by: </span>
            <div className="search-search-by-container">
              <input type="radio" id="sort_by_release_date" name="sort_by" value="release_date" className="radio-btn" defaultChecked onChange={this.sortByDate} />
              <label for="sort_by_release_date" className="search-lable">release date</label>
              <input type="radio" id="sort_by_rating" name="sort_by" value="rating" className="radio-btn" onChange={this.sortByRating} />
              <label for="sort_by_rating" className="search-lable">rating</label>
            </div>
          </div>
      </div>
    </div>
    );
  }
}
