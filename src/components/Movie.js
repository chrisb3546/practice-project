import React, { Component } from 'react';


export default class Movie  extends Component{

    

    render(){
    return(
        <div>
            <h1>{this.props.title}</h1>
             <h2>{this.props.genre}</h2>


        </div>
    )}
}