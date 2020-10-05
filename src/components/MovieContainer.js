import React, { Component } from 'react';
import Movie from "./Movie"
import Search from "./Search"

export default class MovieContainer  extends Component{

    state ={
        query: "",
        movies: {
            title: '',
            year: '',
            genre: '',
            image: ''

        }

        
        // {title: "title1",
        // genre: "genre1"
        // },
        // {title: "title2",
        // genre: "genre2"}
    
    
    }
    searchMovies = e => {
        
        if(e.key === "Enter"){
        fetch(`http://www.omdbapi.com/?t=${e.target.value}&apikey=fcea98c0`)
        .then(res => res.json())
        .then(data => 
            this.setState({
            movies: {...this.state.movies,
            title: data.Title,
            year: data.Year,
            genre: data.Genre,
            image: data.Poster
            
        }
        })
        

        
        )}
            
          
     }
    // fcea98c0
    

    // filteredMovies = () =>{
    //     return this.state.movies.filter(movie => movie.title.includes(this.state.query))
    // }


    render(){
        
        return(
            <div>
                <Search searchMovies={this.searchMovies}/>
                <h1>{this.state.movies.title}</h1>
                    <h2>{this.state.movies.year}</h2>
                    <a href="https://amazon.com">
                    <img alt="Poster" src={this.state.movies.image}
                        width="250" height="145"/></a>
                         <h3>{this.state.movies.genre}</h3>
                            
            </div>
        )}

}