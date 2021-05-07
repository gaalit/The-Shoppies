import React from "react";
import "./styling.css";

const NominationItem = ({ nominatedMovie, onNominationRemove }) => {
  return (
    <div className="movie-item item">
      <img
        alt="movie poster"
        className="ui image"
        src={nominatedMovie.Poster}
      ></img>
      <div className="content">
        <div className="header">
          {nominatedMovie.Title} ({nominatedMovie.Year})
        </div>
      </div>
      <div className="right floated content">
        <button
          className="tiny ui button"
          onClick={() => onNominationRemove(nominatedMovie)}
        >
          Remove
        </button>
      </div>
    </div>
  );
};

export default NominationItem;
