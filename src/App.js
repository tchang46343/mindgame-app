import React from "react";
// import LandingPage from "./Components/LandingPage";
import CreateAccount from "./Components/New Account/CreateAccount";
import "./App.css";

export default class App extends React.Component {
  // state = {
  //   vendors: MockData
  // };
  render() {
    return (
      <div className="LandingLayout">
        <CreateAccount />
        {/* <LandingPage /> */}
        <footer className="Legal">
          Copyright 2019 All Rights Reserved Terrance Chang ©
        </footer>
      </div>
    );
  }
}
