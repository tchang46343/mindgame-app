import React from "react";
import { Link } from "react-router-dom";
import "./LandingPage.css";
import NavBar from "./NavBar";

export default class HomePage extends React.Component {
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
            Motivate The Mind is a mental health game application. Users after
            playing the games should leave with a feeling that promotes
            positivity and clarity in mindset. The game is played by going
            through a series of slides. Each slide is designed in a way to
            increase the stimulation of the user's brain chemical receptor of
            dopamine and serotonin levels. Try out the game, and let us know
            your feedback!
          </p>

          <button className="StartGame">
            <Link className="gameJump" to="/newslide">
              Begin Game!
            </Link>
          </button>
        </form>
        <footer className="Legal">
          Copyright 2019 All Rights Reserved Terrance Chang ©
        </footer>
      </div>
    );
  }
}
