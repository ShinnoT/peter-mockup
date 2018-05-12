import React, { Component } from "react";
import "./style/main.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="cool-border" />
        <div className="top">
          <div className="social-links">
            <a href="#">
              <i className="fab fa-facebook-f" />
            </a>
            <a href="#">
              <i className="fab fa-youtube" />
            </a>
            <a href="#">
              <i className="fab fa-instagram" />
            </a>
            <a href="#">
              <i className="fab fa-twitter" />
            </a>
            <a href="#">
              <i className="fab fa-google-plus-g" />
            </a>
          </div>
          <div className="navigation-column">
            <a href="#">
              <p>Tours</p>
            </a>
            <a href="#">
              <p>Sites</p>
            </a>
            <a href="#">
              <p>Peter Macintosh</p>
            </a>
            <a href="#">
              <p>Gallery</p>
            </a>
            <a href="#">
              <p>VIP Services</p>
            </a>
            <a href="#">
              <p>Shop</p>
            </a>
            <a href="#">
              <p>Walking Lecture</p>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
