import React from "react";
import TokenService from "../../services/token-services";
import AuthApiService from "../../services/user-api-service";
import "./SignIn.css";
import { API_BASE_URL } from "../../config";

class NewAccount extends React.Component {
  //static contextType = context;
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      Password: "",
      userId: "",
      id: []
    };
  }
  componentDidMount() {
    fetch(`${API_BASE_URL}users`)
      .then(res => res.json())
      .then(id => {
        this.setState({
          id
        });
      })
      .catch(err => console.log(err));
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
  generateIdOptions = e => {
    const userIds = this.state.id;
    console.log(userIds);
    return userIds.map(id => {
      return (
        <option key={id.id} value={id.name}>
          {id.id}
          {id.name}
        </option>
      );
    });
  };

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
    const idOptions = this.generateIdOptions();
    return (
      <div>
        <header className="Sign-In"> Account Login </header>

        <form className="NewUserSetup" onSubmit={this.handleSubmitBasicAuth}>
          <header className="EmailTag"> User Email:</header>
          <select
            className="email"
            required
            name="email"
            value={this.state.userId}
            onChange={e => this.emailChanged(e.target.value)}
          >
            {idOptions}
          </select>
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
