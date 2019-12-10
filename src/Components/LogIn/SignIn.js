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
        <header className="Sign-In"> Secure Login </header>

        <form className="NewUserSetup">
          <input
            className="UserEmail"
            required
            placeholder="meditate@mind.com"
          ></input>

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

          <button className="Logon" onClick={this.handleClick}>
            Log In
          </button>
        </form>
      </div>
    );
  }
}

export default NewAccount;
