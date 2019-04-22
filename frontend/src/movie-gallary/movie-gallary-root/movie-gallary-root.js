import React from 'react';
import MovieTileItem from '../movie-gallary-item/movie-gallary-item';

import './movie-gallary-root.css';

export default class MovieTileGallary extends React.Component {
    render() {
        if(this.props.movies === null || this.props.movies.length === 0) {
            return <div className="movie-no-items-found"> No films found </div>
        } else {
            return (
                <div className="movie-gallary-container">
                    {this.props.movies.map((movie, i) => {
                        return(<MovieTileItem key={"movie-gallary-item_#" + i} movie = { movie } />);
                        }
                    )}
                </div>
                )
            }
        }
}
