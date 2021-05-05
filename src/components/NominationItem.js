import React from "react";
import "./MovieItem.css";

const NominationItem = ({ nominatedMovie, onNominationRemove }) => {
  return (
    <div className="movie-item item">
      <img className="ui image" src={nominatedMovie.Poster}></img>
      <div className="content">
        <div className="header">
          {nominatedMovie.Title} ({nominatedMovie.Year})
        </div>
        <button onClick={() => onNominationRemove(nominatedMovie)}>
          Remove
        </button>
      </div>
    </div>
  );
};

export default NominationItem;
