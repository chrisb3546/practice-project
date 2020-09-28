import React, { useState } from 'react';


function Search() {  
    return(
        <div>
           <input placeholder="Search Movies" onChange={this.props.searchMovies}></input>
        </div>
    )
}

export default Search;