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
          <div className="title">
            <p>Kyoto Sights and Nights</p>
          </div>
        </div>
        <div className="random-images">
          <div className="first-image" />
          <div className="second-image" />
          <div className="first-content">
            <h1>Lorem Ipsum</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
          </div>
          <div className="third-image" />
          <div className="second-content">
            <p>
              &ensp; &ensp; &ensp; &ensp; &ensp;Walking lecture in the streets
              of Kyoto.
            </p>
          </div>
          <div className="cool-brackets" />
          <div className="fourth-image" />
          <div className="third-content">
            <blockquote>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              eget leo nunc, nec tempus mi? Curabitur id nisl mi, ut vulputate
              urna. Quisque porta facilisis tortor, vitae bibendum velit
              fringilla vitae! Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Mauris eget leo nunc, nec tempus mi? Curabitur id
              nisl mi, ut vulputate urna. Quisque porta facilisis tortor, vitae
              bibendum velit fringilla vitae!
              <cite>Somebody famous</cite>
            </blockquote>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
