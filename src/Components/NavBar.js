import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

export default class NavBar extends React.Component {
  render() {
    return (
      <div className="NavigationContent">
        <nav className="main">
          <Link to="newaccount" className="NewAccount">
            Create Account
          </Link>
          {/* <img src=""></img> */}
          <Link to="signin" className="Login">
            Sign-in/Sign-out
          </Link>
        </nav>
      </div>
    );
  }
}
