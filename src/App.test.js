import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import LandingPage from "./Components/LandingPage";
import CreateAccount from "./Components/New Account/CreateAccount";
import Signin from "./Components/LogIn/SignIn";
import MainScreen from "./Components/GameComponent/PrimaryPage";
import ResultsPage from "./Components/EndGame/ResultsPage";
import Context from "./context";
import App from "./App";

it("App page renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
it("Landing page renders without crashing and errors", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <BrowserRouter>
      <LandingPage />
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
it("Create page renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <BrowserRouter>
      <CreateAccount />
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
it("Sign-in page renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <BrowserRouter>
      <Signin />
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
it("Main Screen page renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <BrowserRouter>
      <MainScreen />
    </BrowserRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
it("Results Screen page renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<ResultsPage />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("Context Screen page renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Context />, div);
  ReactDOM.unmountComponentAtNode(div);
});
