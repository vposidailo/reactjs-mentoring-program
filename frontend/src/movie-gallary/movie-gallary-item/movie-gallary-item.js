import React from 'react';

import './movie-gallary-item.css';

export default class MovieTileItem extends React.Component {
    render() {
    return (
        <div className="card-container">
            <div className="card">
                <img src={this.props.movie.poster_path} className="movie-img"/>
                <div className="container">
                    <div className="movie-release-title">
                        <span><b>{this.props.movie.title}</b></span>
                    </div>
                    <div className="movie-release-date">
                        <span>{this.props.movie.release_date.substring(0, 4)}</span>
                    </div>
                </div>
                <div className="movie-release-gender">
                    <span>{this.props.movie.genres[0]}</span>
                </div>
            </div>
        </div>
    );
  }
}
