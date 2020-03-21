import React from "react";
import "./ResultsPage.css";
import { Link } from "react-router-dom";

class GameResults extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="GameOverContainer">
        <header className="GameOver"> CONGRATS!!! </header>

        <p className="OutReach">
          {" "}
          You have complete Motivate The Mind. By this time you should be
          feeling more relaxed and refreshed. Please share with your friend and
          help us grow our community base. More feature are soon to come in the
          future! Stay tune!
        </p>

        <Link className="playAgain" to="/">
          Play Again
        </Link>
      </div>
    );
  }
}

export default GameResults;
