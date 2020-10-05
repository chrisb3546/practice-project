import React, { useState } from 'react';


function Search(props) {  
    return(
        <div>
            
           <input placeholder="Search Movies" onKeyPress={props.searchMovies}></input>
            
        </div>
    )
}

export default Search;