import React from "react";
import "./PrimaryPage.css";

class MainScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  increaseCount(e) {
    // e.preventDefault();
    // this.setState({ count: this.state.count + 1 });
    const count = this.state.count;
    console.log(count);
    // this.setState(count => ({
    //   count: this.state.count + 1
    // }));
  }

  render() {
    const { count } = this.state;

    return (
      <div>
        <h1> Score: {count}</h1>

        <button> Next Slide</button>
      </div>
    );
  }
}

export default MainScreen;
