import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import LandingPage from "./Components/LandingPage";
import CreateAccount from "./Components/New Account/CreateAccount";
import Signin from "./Components/LogIn/SignIn";
import "./App.css";

export default class App extends React.Component {
  // state = {
  //   vendors: MockData
  // };
  render() {
    return (
      <div className="LandingLayout">
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/newaccount" component={CreateAccount} />
          <Route path="/signin" component={Signin} />
        </Switch>
        <footer className="Legal">
          Copyright 2019 All Rights Reserved Terrance Chang ©
        </footer>
      </div>
    );
  }
}
