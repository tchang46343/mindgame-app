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
        <header className="Sign-In"> Account Login </header>

        <form className="NewUserSetup">
          <header className="EmailTag"> Email Address</header>
          <input
            className="UserEmail"
            required
            placeholder="meditate@mind.com"
          ></input>
          <header className="PasswordTag"> Password</header>
          <input
            type={this.state.hidden ? "password" : "text"}
            placeholder="Password"
            required
            className="PasswordEntry"
            type="Password"
          />

          <button className="VerifyAccount" onClick={this.handleClick}>
            Log In
          </button>
        </form>
      </div>
    );
  }
}

export default NewAccount;
