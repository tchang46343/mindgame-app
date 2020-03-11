import React from "react";
import { Link } from "react-router-dom";
import DisplaySlide from "./DisplaySlide";
import "./PrimaryPage.css";
import { ApplicationContext } from "../../context";

class MainScreen extends React.Component {
  static contextType = ApplicationContext;
  constructor(props) {
    super(props);
    this.state = {
      word: "",
      quote: "",
      imageurl: "",
      count: 1
    };
  }
  increment = () => {
    this.setState({
      count: this.state.count + 1
    });
  };

  // showNewContent = e => {
  //   e.eventpreventDefault();

  //   const { word, quote, imageurl } = this.state;
  //   1.utilize context to target attribute values to update
  //   2.Create logic so that next button re-render the display slide to target paragraph attributes
  // };

  render() {
    return (
      <div>
        <header className="gameInfo">
          <p className="currentCount">
            {" "}
            You are currently on Mediation Card: {this.state.count}
          </p>
          <button className="moveOn" onClick={this.increment}>
            <Link className="nextSlide" to="/results">
              {" "}
              Next Slide
            </Link>
          </button>
        </header>
        <DisplaySlide />
      </div>
    );
  }
}

export default MainScreen;
