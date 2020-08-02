import React, { Component } from "react";
import SearchBar from "./SearchBar";
import axios from 'axios';
const accessKey = process.env.REACT_APP_ACCESS_KEY;
class App extends Component {
  constructor() {
    super();
    this.state = {
      images: [],
    };
  }

  // Do this like everytime... lol
  onSearchSubmit = async (term) => {
    console.log(term);
    const response = await axios.get("https://api.unsplash.com/search/photos", {
      params: { query: term },
      headers: {
        Authorization: `Client-ID ${accessKey}`,
      },
    });
    this.setState({
      images: response.data.results,
    });
  }

  render() {
    return (
      <div
        className="ui container"
        style={{
          marginTop: "10px",
        }}
      >
        <SearchBar onSubmit={this.onSearchSubmit} />
        Found: {this.state.images.length} images!
      </div>
    );
  }
}

export default App;
