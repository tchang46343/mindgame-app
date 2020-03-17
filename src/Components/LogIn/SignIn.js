import React from "react";
import TokenService from "../../services/token-services";
import AuthApiService from "../../services/user-api-service";
import "./SignIn.css";
import { Link } from "react-router-dom";

class NewAccount extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  emailChanged(email) {
    this.setState({
      email
    });
  }

  passwordChanged(password) {
    this.setState({
      password
    });
  }

  handleSubmitBasicAuth = e => {
    e.preventDefault();
    this.setState({ error: null });
    const { email, password } = e.target;
    console.log(email);
    AuthApiService.postUser({
      email: email.value,
      password: password.value
    })
      .then(res => {
        email.value = "";
        password.value = "";
        TokenService.saveAuthToken(res.saveAuthToken);
        this.props.onLoginSucess();
      })
      .catch(res => {
        this.setState({ error: res.error });
      });
  };

  render() {
    return (
      <div className="all">
        <nav className="accountNav">
          <Link className="accountLinks" to="/">
            Home Page
          </Link>
          <Link className="accountLinks" to="/slide/1">
            Begin Game
          </Link>
        </nav>
        <div className="mainContainerSignIn">
          <header className="Sign-In"> Account Login </header>
          <p className="demoCred">
            {" "}
            The credential example are for test purposes ONLY.<br></br>{" "}
            Username: testuser@gmail.com and Password: test1{" "}
          </p>
          <form className="NewUserSetup" onSubmit={this.handleSubmitBasicAuth}>
            <header className="EmailTag"> User Email:</header>
            <input
              className="email"
              required
              name="email"
              placeholder="test@gmail.com"
              value={this.state.userId}
              onChange={e => this.emailChanged(e.target.value)}
            ></input>
            <header className="PasswordTag"> Password:</header>
            <input
              placeholder="Password"
              required
              className="PasswordEntry"
              type="Password"
              name="Password"
              value={this.state.password}
              onChange={e => this.passwordChanged(e.target.value)}
            />

            <button className="VerifyAccount">Log In</button>
          </form>
        </div>
      </div>
    );
  }
}

export default NewAccount;
