import React, { Component } from "react";
import "./style/main.css";

class App extends Component {
  constructor(props) {
    super(props);
    // this.initials = React.createRef();
    this.state = {
      styles: {}
    };
    this.scrollLoop = this.scrollLoop.bind(this);
  }

  componentDidMount() {
    // const initials = this.initials.current;
    window.addEventListener("scroll", this.scrollLoop, false);
  }

  scrollLoop(e) {
    const that = this;
    const setTranslate = (xPos, yPos, arrOfChanges) => {
      that.setState({
        styles: {
          firstImage: {
            transform: `translate3d(${xPos}px, ${yPos * arrOfChanges[0]}px, 0)`
          },
          secondImage: {
            transform: `translate3d(${xPos}px, ${yPos * arrOfChanges[1]}px, 0)`
          },
          thirdImage: {
            transform: `translate3d(${xPos}px, ${yPos * arrOfChanges[2]}px, 0)`
          },
          fourthImage: {
            transform: `translate3d(${xPos}px, ${yPos * arrOfChanges[3]}px, 0)`
          }
        }
      });
    };
    let yScrollPosition = window.scrollY;
    setTranslate(0, yScrollPosition, [0.05, 0.02, -0.03, -0.05]);
    requestAnimationFrame(this.scrollLoop);
  }

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
          <div className="first-image" style={this.state.styles.firstImage} />
          <div className="second-image" style={this.state.styles.secondImage} />
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
          <div className="third-image" style={this.state.styles.thirdImage} />
          <div className="second-content">
            <p>
              &ensp; &ensp; &ensp; &ensp; &ensp;Walking lecture in the streets
              of Kyoto.
            </p>
          </div>
          <div className="cool-brackets" />
          <div className="fourth-image" style={this.state.styles.fourthImage} />
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
