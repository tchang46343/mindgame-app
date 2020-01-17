import React from "react";
import { Route, Switch } from "react-router-dom";
import LandingPage from "./Components/LandingPage";
import CreateAccount from "./Components/New Account/CreateAccount";
import Signin from "./Components/LogIn/SignIn";
import MainScreen from "./Components/GameComponent/PrimaryPage";
import ResultsPage from "./Components/EndGame/ResultsPage";
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
          <Route path="/newslide" component={MainScreen} />
          <Route path="/results" component={ResultsPage} />
        </Switch>
      </div>
    );
  }
}
