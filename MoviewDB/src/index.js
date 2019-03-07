import React from 'react'
import ReactDOM from 'react-dom'
import { Search } from './components/search'

const header = React.createElement('div', null, 'Should be header');
const footer = React.createElement('div', null, 'Should be footer');
const mainLayout = React.createElement('div', null, "Hello world");

const rootElement = React.createElement('div', null, header, mainLayout, footer)

// class App extends React.Component {
//   render(){
//     return rootElement
//   }
// }

const Book = (props) => <li>
  <p>{props.label}</p>
  <p>{props.author}</p>
  <p>{props.year}</p>
</li>

const App = (
  <ul>
    <Book label = 'A Game of Thrones' author = 'George R. R. Martin' year = '1996'/>
    <Book label = 'A Clash of Kings' author = 'George R. R. Martin' year = '1998'/>
    <Book label = 'A Storm of Swords' author = 'George R. R. Martin' year = '2000'/>
  </ul>
);

ReactDOM.render(
  App,
  document.getElementById('root')
);


