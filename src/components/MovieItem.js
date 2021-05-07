import React from "react";
import "./MovieItem.css";

const MovieItem = ({
  movie,
  onMovieSelect,
  selectedMovies,
  disabledButton,
}) => {
  return (
    <div className="movie-item item">
      <img alt="movie poster" className="ui image" src={movie.Poster}></img>
      <div className="content">
        <div className="header">
          {movie.Title} ({movie.Year})
        </div>
        <button onClick={(e) => onMovieSelect(movie, e)}>Nominate</button>
      </div>
    </div>
  );
};

export default MovieItem;
