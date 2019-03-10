import React from 'react';
import ReactDOM from 'react-dom';
import { Search } from './components/search-component';

// create element examples
const header = React.createElement('div', null, React.createElement('h1', null, 'This is a header'));
const middle = React.createElement('div', null, 'here should be search bar');
const footer = React.createElement('div', null, 'Footer');

// create function component examples
const listOfMovie = (movie) => {
    return <div><h4>{ movie.Title }</h4><p>{movie.Author}</p><p>{movie.Duration}</p></div>
}

const firtMoview = {
    Title: "Kill Bill",
    Author: "Quentin Tarantino",
    Duration: "1h 59 mins"
};

    

ReactDOM.render([header, middle, <Search />, listOfMovie(firtMoview), footer], document.getElementById('root'));