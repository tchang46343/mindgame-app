import React from "react";
import "./CreateAccount.css";
import { API_BASE_URL } from "../../config";

class NewAccount extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
      hidden: true
    };
    this.toggleShow = this.toggleShow.bind(this);
  }
  setFirstName(firstname) {
    this.setState({
      firstname
    });
  }

  setLastName(lastname) {
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
  handleClick = e => {
    e.preventDefault();
    const { firstname, lastname, email, password } = this.state;
    const newUser = { firstname, lastname, email, password };
    console.log(JSON.stringify(newUser));

    const options = {
      method: "POST",
      body: JSON.stringify(newUser),
      headers: {
        "Content-Type": "application/json"
      }
    };

    fetch(`${API_BASE_URL}users`, options)
      .then(res => {
        if (!res.ok) {
          throw new Error(
            "Something went wrong please try to submit you request again."
          );
        }
        return res.send(
          `Success!!! Welcome ${firstname} you are now a memeber of Motivate the Mind`
        );
      })
      .then(data => {
        this.setState({
          firstname: " ",
          lastname: " ",
          email: " ",
          password: " "
        });
      })
      .catch(err => {
        this.setState({
          error: err.message
        });
      });
  };

  render() {
    return (
      <div>
        <header className="accountTitle"> Create A New Account</header>

        <form className="newUserSetup">
          <p className="instructions">
            Please fill in the following field below:
          </p>
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
            className="emailAddress"
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
