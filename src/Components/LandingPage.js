import React from "react";
import "./LandingPage.css";
import NavBar from "./NavBar";

export default class HomePage extends React.Component {
  onSubmit(event) {
    event.preventDefault();
    console.log("test");
  }
  render() {
    return (
      <div>
        <NavBar />
        <form
          className="PrimaryContent"
          onSubmit={event => this.onSubmit(event)}
        >
          <header className="Title"> Motivate The Mind</header>
          <h1 className="Instruction">Instructions:</h1>
          <p className="InstructionInfo">
            Motivate The Mind is a mental health game. The user should feel a
            sense of positivity and a clearier mindset.The game is played by
            going through a series of slides that are designed to stimulate the
            brain's mortor cortex. Each slide will have different content that
            the user will interpret, but the format will always have a picture,
            inspiring phrase, and self-reflection.
          </p>

          <button className="StartGame">Begin Game!</button>
        </form>
      </div>
    );
  }
}
