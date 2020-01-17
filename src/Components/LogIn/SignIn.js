import React from "react";
import TokenService from "../../services/token-services";
import "./SignIn.css";

class NewAccount extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleSubmitBasicAuth = e => {
    e.preventDefault();
    const { email, Password } = e.target;
    TokenService.saveAuthToken(
      TokenService.makeBasicAuthToken(email.value, Password.value)
    );
    //articleservices
  };
  render() {
    return (
      <div>
        <header className="Sign-In"> Account Login </header>

        <form className="NewUserSetup" onSubmit={this.handleSubmitBasicAuth}>
          <header className="EmailTag"> User Email:</header>
          <input
            className="email"
            required
            placeholder="meditate@mind.com"
            name="email"
          ></input>
          <header className="PasswordTag"> Password:</header>
          <input
            placeholder="Password"
            required
            className="PasswordEntry"
            type="Password"
            name="Password"
          />

          <button className="VerifyAccount">Log In</button>
        </form>
      </div>
    );
  }
}

export default NewAccount;
