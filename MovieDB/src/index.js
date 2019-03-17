import React from 'react';
import ReactDOM from 'react-dom';
import Search from './components/search';
import MovieTileItem from './components/movie-tile-item';

// create element examples
const header = React.createElement('div', null, React.createElement('h1', null, 'This is a header'));
const middle = React.createElement('div', null, 'here should be search bar');
const footer = React.createElement('div', null, 'Footer');

// create function component examples
const listOfMovie = (movie) => {
    return <div><h4>{ movie.title }</h4><p>{movie.author}</p><p>{movie.duration}</p></div>
}

const firtMoview = {
    title: "Kill Bill",
    author: "Quentin Tarantino",
    duration: "1h 59 mins"
};

ReactDOM.render([header, middle, <Search />, listOfMovie(firtMoview), <MovieTileItem />, footer], document.getElementById('root'));