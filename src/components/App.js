import React from "react";
import SearchBar from "./SearchBar";
import omdb from "../apis/omdb";

class App extends React.Component {
  onTermSubmit = (term) => {
    omdb.get("/", {
      params: {
        s: term,
      },
    });
  };
  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit} />
      </div>
    );
  }
}

export default App;
