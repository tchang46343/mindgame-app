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
