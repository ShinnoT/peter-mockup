import React, { Component } from "react";
import logo from "./logo.svg";
import "./style/main.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="navbar">
          <div className="left-content">title logo</div>
          <div className="right-content">list of tabs to click</div>
        </div>
        <div className="banner">
          <h1>
            Kyoto <strong>Sights</strong> & <strong>Nights</strong>
          </h1>
        </div>
        <div className="footer">some footer here</div>
      </div>
    );
  }
}

export default App;
