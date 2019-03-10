import React from 'react'

export { Search } 

class Search extends React.Component{
    render(){
        return <div>
                <p>FIND YOUR MOVIE</p>
                <input type="text" />
                <button>Search</button>
            </div>;
    }
}

export default Search;