import React from "react";
import TokenService from "../../services/token-services";
import AuthApiService from "../../services/user-api-service";
import "./SignIn.css";
//import context from "../../context";

class NewAccount extends React.Component {
  //static contextType = context;
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      Password: ""
      // this.props.onLoginSucess()
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
    this.setState({ error: null });
    const { email, Password } = e.target;
    AuthApiService.postUser({
      email: email.value,
      Password: Password.value
    })
      .then(res => {
        email.value = "";
        Password.value = "";
        TokenService.saveAuthToken(res.saveAuthToken);
        this.props.onLoginSucess();
      })
      .catch(res => {
        this.setState({ error: res.error });
      });
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
