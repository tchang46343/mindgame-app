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

          <Link to="signin" className="Login">
            Sign In
          </Link>
        </nav>
      </div>
    );
  }
}
