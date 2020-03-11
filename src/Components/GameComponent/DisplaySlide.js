import React from "react";
import "./DisplaySlide.css";
import Timer from "./Timer";
import { ApplicationContext } from "../../context";

class DisplayContent extends React.Component {
  static contextType = ApplicationContext;
  constructor(props) {
    super(props);
    this.state = {
      word: "The contemplation of your own thoughts and desires and conduct",
      phrase: "Stay hungry. Stay foolish. -Steve Jobs",
      img: "",
      item: []
    };
  }

  onChangeItems = e => {
    e.preventDefault();
  };

  render() {
    return (
      <div>
        <main className="HeadSpace">
          <div className="container">
            <header className="title">Contemplate the Word:</header>
            <p className="words" value={this.state.word}>
              {" "}
              Introspection:{this.state.word}
            </p>
          </div>

          <div className="container">
            <header className="title">Phrase To Live By:</header>
            <p className="words" value={this.state.phrase}>
              {" "}
              Quote:{this.state.phrase}
            </p>
          </div>

          <div className="containerImage">
            <header className="title">Picture Decompression:</header>
            <img
              className="FunnyImage"
              src="https://zenstatic.blob.core.windows.net/blog/p1cb8ot5dgi0i1jcl4011fnp14s9l.png"
              alt="Relaxing Cat"
              value={this.state.img}
            ></img>
          </div>
          <div className="container">
            <Timer />
          </div>

          <button onClick={this.onChangeItems}>Click</button>
        </main>
      </div>
    );
  }
}

export default DisplayContent;
