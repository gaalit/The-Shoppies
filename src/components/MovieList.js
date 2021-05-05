import React from "react";
import MovieItem from "./MovieItem";

const MovieList = ({ movies, onMovieSelect }) => {
  // conditional statement making sure no error is thrown if the search term isn't complete enough
  if (!movies) {
    return (
      <div>Please make sure your search contains a minimum of 3 letters</div>
    );
  }
  const renderedList = movies.map((movie) => {
    return (
      <MovieItem
        key={movie.imdbID}
        onMovieSelect={onMovieSelect}
        movie={movie}
      />
    );
  });
  return <div className="ui relaxed divided list">{renderedList}</div>;
};

export default MovieList;
