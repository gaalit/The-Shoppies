import React from "react";
import "./MovieItem.css";

const MovieItem = ({ movie, onMovieSelect }) => {
  return (
    <div className="movie-item item">
      <img alt="movie poster" className="ui image" src={movie.Poster}></img>
      <div className="content">
        <div className="header">
          {movie.Title} ({movie.Year})
        </div>
        <button onClick={() => onMovieSelect(movie)}>Nominate</button>
      </div>
    </div>
  );
};

export default MovieItem;
