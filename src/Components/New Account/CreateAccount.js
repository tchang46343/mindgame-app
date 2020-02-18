import React from "react";
import "./CreateAccount.css";
import UserApiService from "../../services/user-api-service";

class NewAccount extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: "",
      lastname: "",
      email: "",
      password: ""
    };
    this.toggleShow = this.toggleShow.bind(this);
  }
  setFirstName(firstname) {
    this.setState({
      firstname
    });
  }

  setlastName(lastname) {
    this.setState({
      lastname
    });
  }

  setEmail(email) {
    this.setState({
      email
    });
  }

  setPassword(password) {
    this.setState({
      password
    });
  }
  toggleShow(e) {
    e.preventDefault();
    this.setState({ hidden: !this.state.hidden });
  }
  // handleClick(e) {
  //   e.preventDefault();
  //   UserApiService.postUser({
  //     firstname: firstname.value,
  //     lastname: lastname.value,
  //     email: email.value,
  //     password: password.value
  //   });
  // }

  render() {
    return (
      <div>
        <header className="accountTitle"> Create A New Account</header>
        <p className="instructions">
          Please fill in the following field below:
        </p>

        <form className="newUserSetup">
          <input
            className="firstName"
            required
            placeholder="First Name"
            type="text"
            value={this.state.firstname}
            onChange={e => this.setFirstName(e.target.value)}
          />
          <input
            className="lastName"
            required
            placeholder="LastName"
            type="text"
            value={this.state.lastname}
            onChange={e => this.setLastName(e.target.value)}
          />
          <input
            className="email"
            required
            placeholder="Email Address"
            type="text"
            value={this.state.email}
            onChange={e => this.setEmail(e.target.value)}
          />

          <div className="password">
            <input
              type={this.state.hidden ? "password" : "text"}
              placeholder="Password"
              required
              className="userPassword"
              value={this.state.password}
              onChange={e => this.setPassword(e.target.value)}
            />
            <button className="showPassword" onClick={this.toggleShow}>
              Show / Hide
            </button>
          </div>

          <p className="termsConditions">
            By clicking Sign Up, you agree to our Terms, Data Policy and Cookies
            Policy.
          </p>

          <button className="newUser" onClick={this.handleClick}>
            Sign Up
          </button>
        </form>
      </div>
    );
  }
}

export default NewAccount;
