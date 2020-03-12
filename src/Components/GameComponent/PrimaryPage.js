import React from "react";
import { Link } from "react-router-dom";
import DisplaySlide from "./DisplaySlide";
import Results from "../EndGame/ResultsPage";
import "./PrimaryPage.css";
import { ApplicationContext } from "../../context";

class MainScreen extends React.Component {
  static contextType = ApplicationContext;
  constructor(props) {
    super(props);
    this.state = {
      count: 1
    };
  }
  increment = () => {
    if (this.state.count >= 10) {
      return <Results />;
    } else {
      this.setState({
        count: this.state.count + 1
      });
    }
    // this.setState({
    //   count: this.state.count + 1
    // });
  };

  // gameFinished = () => {
  //   const gameCounter = this.state.count;
  //   //console.log(gameCounter);
  //   if (gameCounter >= 10) {
  //     return <Results />;
  //   }
  // };

  render() {
    const slideId = parseInt(this.props.match.params.slide_id);
    const slide = this.context.gameslides.find(
      slide => slide.id === parseInt(slideId)
    );

    console.log(slideId, slide, this.context.gameslides);

    return (
      <div>
        <header className="gameInfo">
          <p className="currentCount">
            {" "}
            You are currently on Mediation Card: {slideId}
          </p>
          <button className="moveOn" onClick={this.increment}>
            <Link className="nextSlide" to={`/slide/${slideId + 1}`}>
              Next
            </Link>
          </button>
        </header>
        <DisplaySlide slide={slide} />
      </div>
    );
  }
}

export default MainScreen;
