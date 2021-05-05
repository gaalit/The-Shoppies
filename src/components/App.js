import React from "react";
import SearchBar from "./SearchBar";
import MovieList from "./MovieList";
import NominationList from "./NominationList";
import omdb from "../apis/omdb";

class App extends React.Component {
  state = { movies: [], selectedMovies: [], search: "", limit: false };

  onTermSubmit = async (term) => {
    const response = await omdb.get("/", {
      params: {
        s: term,
        type: "movie",
      },
    });
    this.setState({ search: term });
    this.setState({ movies: response.data.Search });
  };

  onMovieSelect = (movie) => {
    if (this.state.selectedMovies.length < 5) {
      this.setState({ selectedMovies: [...this.state.selectedMovies, movie] });
    } else {
      this.setState({ limit: true });
    }
  };
  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTermSubmit} />
        {this.state.limit ? (
          <div className="ui warning message">
            <div className="header">You can nominate a maximum of 5 movies</div>
            Delete some movies from your nomination list, then try again
          </div>
        ) : (
          ""
        )}

        <div className="ui grid">
          <div className="ui row">
            <div className="eight wide column">
              <div className="ui segment">
                <h4>
                  {this.state.movies === undefined
                    ? ""
                    : `Results for "${this.state.search}"`}
                </h4>
                <MovieList
                  onMovieSelect={this.onMovieSelect}
                  movies={this.state.movies}
                />
              </div>
            </div>
            <div className="eight wide column">
              <div className="ui segment">
                <h4>Nomination List</h4>
                <NominationList movies={this.state.selectedMovies} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
