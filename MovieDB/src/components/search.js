import React from 'react';

// eslint-disable-next-line react/prefer-stateless-function
export default class Search extends React.Component {
  render() {
    return (
      // eslint-disable-next-line react/jsx-filename-extension
      <div>
        <p>FIND YOUR MOVIE</p>
        <input type="text" />
        <button type="button">Search</button>
      </div>
    );
  }
}
