import React from "react";
import TokenService from "../../services/token-services";
import "./SignIn.css";
//import context from "../../context";

class NewAccount extends React.Component {
  //static contextType = context;
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      Password: ""
    };
  }

  emailChanged(email) {
    this.setState({
      email
    });
  }

  passwordChanged(Password) {
    this.setState({
      Password
    });
  }

  handleSubmitBasicAuth = e => {
    e.preventDefault();
    const { email, Password } = e.target;
    TokenService.saveAuthToken(
      TokenService.makeBasicAuthToken(email.value, Password.value)
    );
    //articleservices
  };

  handleSubmit = e => {
    e.preventDefault();
    this.context.handleSubmit(this.state.email, this.state.Password);
  };

  render() {
    //const { email, Password } = this.state;

    // console.log(email);
    // console.log(Password);
    return (
      <div>
        <header className="Sign-In"> Account Login </header>

        <form className="NewUserSetup" onSubmit={this.handleSubmit}>
          <header className="EmailTag"> User Email:</header>
          <input
            className="email"
            required
            placeholder="meditate@mind.com"
            name="email"
            value={this.state.email}
            onChange={e => this.emailChanged(e.target.value)}
          ></input>
          <header className="PasswordTag"> Password:</header>
          <input
            placeholder="Password"
            required
            className="PasswordEntry"
            type="Password"
            name="Password"
            value={this.state.Password}
            onChange={e => this.passwordChanged(e.target.value)}
          />

          <button className="VerifyAccount">Log In</button>
        </form>
      </div>
    );
  }
}

export default NewAccount;
