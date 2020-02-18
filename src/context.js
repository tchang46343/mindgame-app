import React, { createContext, Component } from "react";

export const ApplicationContext = createContext();

class ApplicationContextProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: [],
      Password: []
    };
  }

  componentDidMount() {
    fetch("http://localhost:8000/users", {
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response => response.json())
      .then(results => {
        console.log(results);
        this.setState({
          users: results
        });
      });
  }

  updateFilter = (email, Password) => {
    this.setState({
      filter: { email, Password }
    });
  };
  render() {
    const { email, Password } = this.state;
    const value = {
      email,
      filter,
      updateFilter: this.updateFilter
    };
    return (
      <ApplicationContext.Provider value={value}>
        {this.props.children}
      </ApplicationContext.Provider>
    );
  }
}

//export default ApplicationContextProvider;
