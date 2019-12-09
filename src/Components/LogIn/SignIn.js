import React from "react";
import "./SignIn.css";

class NewAccount extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <header className="Sign-In"> Create A New Account</header>

        <form className="NewUserSetup">
          <input
            className="FirstName"
            required
            placeholder="First Name"
          ></input>
          <input className="LastName" required placeholder="LastName"></input>
          <input className="Email" required placeholder="Email Address"></input>
          <div className="password">
            <input
              type={this.state.hidden ? "password" : "text"}
              placeholder="Password"
              required
              className="userpassword"
            />
            <button className="ShowPassword" onClick={this.toggleShow}>
              Show / Hide
            </button>
          </div>

          <p className="TermsConditions">
            By clicking Sign Up, you agree to our Terms, Data Policy and Cookies
            Policy.
          </p>

          <button className="NewUser" onClick={this.handleClick}>
            Sign Up
          </button>
        </form>
      </div>
    );
  }
}

export default NewAccount;
