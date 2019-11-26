import React from "react";
import "./NavBar.css";

export default class NavBar extends React.Component {
  render() {
    return (
      <div className="NavigationContent">
        <nav className="main">
          <button className="NewAccount">Create Account</button>
          {/* <img src=""></img> */}
          <button className="Login">Sign-in/Sign-out</button>
        </nav>
      </div>
    );
  }
}
