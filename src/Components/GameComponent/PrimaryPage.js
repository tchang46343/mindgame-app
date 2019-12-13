import React from "react";
//import Counter from "./Counter";
import DisplaySlide from "./DisplaySlide";
import "./PrimaryPage.css";

class MainScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
        <p className="CurrentCount">
          {" "}
          You are currently on Mediation Card: {this.state.count}
        </p>
        <DisplaySlide />
        {/* <button onClick={this.increment}> Next Slide</button> */}
      </div>
    );
  }
}

export default MainScreen;
