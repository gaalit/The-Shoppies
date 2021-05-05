import React from "react";
import "./MovieItem.css";

const MovieItem = ({ movie }) => {
  return (
    <div className="movie-item item">
      <img className="ui image" src={movie.Poster}></img>
      <div className={"content"}>
        <div className="header">
          {movie.Title} ({movie.Year})
        </div>
      </div>
    </div>
  );
};

export default MovieItem;
