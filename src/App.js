import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header, { useState } from "./components/Header";
import Section from "./components/Section";
import { DataProvider } from "./components/Context";
import SearchBar from "./components/section/SearchBar";
import { DataContext } from "./components/Context";
// import Rating from "./components/section/Rating";
// import ScrollArrow from "./components/section/ScrollArrow";
// import Footer from "./components/section/Footer";
// import { Fragment } from "react";
class App extends React.Component {
  static contextType = DataContext;

  state = {
    searchInput: "",
  };

  handleChange = (e) => {
    this.setState({ searchInput: e.target.value });
  };
  render() {
    return (
      <DataProvider>
        <div className="app">
          <Router>
            <Header
              searchInput={this.state.searchInput}
              handleChange={this.handleChange}
            />
            {this.state.searchInput.trim().length > 0 ? (
              <SearchBar searchInput={this.state.searchInput} />
            ) : (
              <Section />
            )}
          </Router>
        </div>
      </DataProvider>
    );
  }
}

export default App;

//sockets
//rest api
//sending img
//react hooks
//props
