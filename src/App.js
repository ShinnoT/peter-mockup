import React, { Component } from "react";
import logo from "./logo.svg";
import "./style/main.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="side-bar">
          <div className="top-content">
            <p>KSN</p>
            <i className="fas fa-ellipsis-h" />
          </div>
          <div className="bottom-content">
            <i class="fab fa-facebook-f" />
            <i class="fab fa-twitter" />
            <i class="fab fa-instagram" />
            <i class="fab fa-google-plus-g" />
          </div>
        </div>
        <div className="main-content">
          <div className="top-pics">
            <div className="first-image">
              <div className="inner">
                <p>VIP Tours</p>
              </div>
            </div>
            <div className="second-image">
              <div className="inner">
                <p>Walking Lecture</p>
              </div>
            </div>
          </div>
          <div className="bottom-pics">
            <div className="banner">
              <p>Peter Macintosh</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
