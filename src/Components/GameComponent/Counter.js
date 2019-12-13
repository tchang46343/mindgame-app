import React, { Component } from "react";

class SlideCounter extends Component {
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
        <p> You are currently on Slide: {this.state.count}</p>
        <button onClick={this.increment}> Next Slide</button>
      </div>
    );
  }
}

export default SlideCounter;
