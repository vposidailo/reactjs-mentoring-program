import React from 'react';

import './movie-gallary-info.css';

const API = 'https://reactjs-cdp.herokuapp.com/movies/';

export default class MovieInfoDescription extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
          movie: null,
        };
      }
    
      componentDidMount() {
        fetch(API + this.props.id)
          .then(response => response.json())
          .then(payload => this.setState({ movie: payload }));
      }

    render() {
        if (this.state.movie === null)
            return <div></div>
        else
            return (
            <div className="movie-info-container">
                <div className="movie-info-image-container">
                    <img src={this.state.movie.poster_path} className="movie-info-image"/>
                </div>
                <div className="movie-info-description">
                    <div className="movie-info-title-container">
                        <span className="movie-info-title">{this.state.movie.title}</span>
                        <span className="movie-info-vote">{this.state.movie.vote_average}</span>
                    </div>
                    <div className="movie-info-release-duration-container">
                        <span className="movie-info-release-date"><strong>{this.state.movie.release_date.substring(0, 4)}</strong></span>
                        <span><strong>{this.state.movie.runtime} min</strong></span>
                    </div>
                    <div className="movie-info-overview">
                        <span>{this.state.movie.overview}</span>
                    </div>
                </div>
            </div>)
    }
}