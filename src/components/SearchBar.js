import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };
  onInputChange = (event) => {
    this.setState({ term: event.target.value });
  };

  onFormSubmit = (event) => {
    event.preventDefault();

    this.props.onFormSubmit(this.state.term);
  };

  // <div class="field">
  // <div class="ui search">
  //   <div class="ui icon input">
  //     <input class="prompt" type="text" placeholder="Search countries...">
  //     <i class="search icon"></i>
  //   </div>
  //   <div class="results"></div>
  // </div>

  render() {
    return (
      <div className="search-bar ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <h4>Movie Title</h4>
            <div className="ui icon input">
              <input
                placeholder="Search movies..."
                className="prompt"
                type="text"
                value={this.state.term}
                onChange={this.onInputChange}
              ></input>
              <i class="search icon"></i>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
