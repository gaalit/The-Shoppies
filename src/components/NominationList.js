import React from "react";
import NominationItem from "./NominationItem";

const NominationList = ({ movies, onNominationRemove }) => {
  if (movies.length === 0) {
    return (
      <h2
        style={{ color: "#343a40", marginTop: "-5px" }}
        className="ui small header"
      >
        <i className="plus large icon"></i>
        <div className="content">Add a movie to your list</div>
      </h2>
    );
  }

  const nominatedMovie = movies.map((nominatedMovie) => {
    return (
      <NominationItem
        key={nominatedMovie.imdbID}
        nominatedMovie={nominatedMovie}
        onNominationRemove={onNominationRemove}
      />
    );
  });

  return <div className="ui celled animated list">{nominatedMovie}</div>;
};

export default NominationList;
