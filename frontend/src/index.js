/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import ReactDOM from 'react-dom';
import App from "./app/app";
import ErrorBoundary from './error-boundaries/error-boundaries';

ReactDOM.render(<ErrorBoundary><App key="movie-app" /></ErrorBoundary>,  document.getElementById('root'));
