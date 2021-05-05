import React from "react";
import NominationItem from "./NominationItem";

const NominationList = ({ movies, onNominationRemove }) => {
  if (movies.length === 0) {
    return (
      <div className="ui segment">
        <div className="ui active inverted dimmer">
          <div className="ui text loader">Loading</div>
        </div>
        <p></p>
      </div>
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

  return <div className="ui relaxed divided list">{nominatedMovie}</div>;
};

export default NominationList;
