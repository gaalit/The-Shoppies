import React from "react";
import "./styling.css";

const MovieItem = ({ movie, onMovieSelect }) => {
  return (
    <div className="movie-item item">
      <img alt="movie poster" className="ui image" src={movie.Poster}></img>
      <div className="content">
        <div className="movie-search-result">
          {movie.Title} ({movie.Year})
        </div>
      </div>
      <div className="right floated content">
        <button
          className="tiny ui button"
          onClick={(e) => onMovieSelect(movie, e)}
        >
          Nominate
        </button>
      </div>
    </div>
  );
};

export default MovieItem;
