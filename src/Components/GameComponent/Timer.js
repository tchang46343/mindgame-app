import React from "react";
//import "./DisplaySlide.css";
import "./Timer.css";
const ms = require("pretty-ms");
class DisplayContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 0,
      isOn: false,
      start: 0
    };
    this.startTimer = this.startTimer.bind(this);
    this.stopTimer = this.stopTimer.bind(this);
    this.resetTimer = this.resetTimer.bind(this);
  }
  startTimer() {
    this.setState({
      isOn: true,
      time: this.state.time,
      start: Date.now() - this.state.time
    });
    this.timer = setInterval(
      () =>
        this.setState({
          time: Date.now() - this.state.start
        }),
      1
    );
  }
  stopTimer() {
    this.setState({ isOn: false });
    clearInterval(this.timer);
  }
  resetTimer() {
    this.setState({ time: 0, isOn: false });
  }
  render() {
    let start =
      this.state.time === 0 ? (
        <button onClick={this.startTimer} className="buttonLocation">
          start
        </button>
      ) : null;
    let stop =
      this.state.time === 0 || !this.state.isOn ? null : (
        <button onClick={this.stopTimer} className="buttonLocation">
          stop
        </button>
      );
    let resume =
      this.state.time === 0 || this.state.isOn ? null : (
        <button onClick={this.startTimer} className="buttonResume">
          resume
        </button>
      );
    let reset =
      this.state.time === 0 || this.state.isOn ? null : (
        <button onClick={this.resetTimer} className="buttonReset">
          reset
        </button>
      );
    return (
      <div className="positive">
        <header className="title">
          {" "}
          Take Long deep breath for 5 seconds: {ms(this.state.time)}
        </header>
        {start}
        {resume}
        {stop}
        {reset}
      </div>
    );
  }
}

export default DisplayContent;
