import React, { Component } from 'react';
import Movie from "./Movie"
import Search from "./Search"

export default class MovieContainer  extends Component{

    state ={
        query: "",
        movies: [
        {title: "title1",
        genre: "genre1"
        },
        {title: "title2",
        genre: "genre2"}
    
    ]
    }
    searchMovies = e => {
        this.setState({
            query: e.target.value
        })
    }

    filteredMovies = () =>{
        return this.state.movies.filter(movie => movie.title.includes(this.state.query))
    }


    render(){
        const moviesArray = this.filteredMovies().map(movie =><Movie title={movie.title} genre={movie.genre}/> )
        return(
            <div>
                <Search searchMovies={this.searchMovies}/>
                {moviesArray}
            </div>
        )}
}