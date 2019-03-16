import React from 'react' 

export default class Search extends React.Component{
    render(){
        return <div>
                <p>FIND YOUR MOVIE</p>
                <input type="text" />
                <button>Search</button>
            </div>;
    }
}