import React from "react";
import MovieItem from "./MovieItem";

const MovieList = ({ movies }) => {
  const renderedList = movies.map((movie) => {
    return <MovieItem movie={movie} />;
  });
  return <div className="ui relaxed divided list">{renderedList}</div>;
};

export default MovieList;
