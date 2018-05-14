import React, { Component } from "react";
import logo from "./logo.svg";
import "./style/main.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="navbar">
          <div className="left-content">KSN</div>
          <div className="right-content">
            <a href="#">Walking Lecture</a>
            <a href="#">Peter Macintosh</a>
            <a href="#">VIP Tours</a>
          </div>
        </div>
        <div className="banner">
          <h1>
            Kyoto <strong>Sights</strong> & <strong>Nights</strong>
          </h1>
        </div>
        <div className="footer">
          <i className="fab fa-twitter" />
          <i className="fab fa-facebook-f" />
          <i className="fab fa-youtube" />
          <i className="fab fa-instagram" />
          <i className="fab fa-google-plus-g" />
        </div>
      </div>
    );
  }
}

export default App;
