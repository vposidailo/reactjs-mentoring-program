/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import ReactDOM from 'react-dom';
import App from "./app/app";
import ErrorBoundary from './error-boundaries/error-boundaries';

import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { moviesReducer } from './reducers/movie-reducer'

const store = createStore(moviesReducer);

ReactDOM.render(<ErrorBoundary><Provider store={store}><App key="movie-app" /></Provider></ErrorBoundary>,  document.getElementById('root'));
