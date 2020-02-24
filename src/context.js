import React, { createContext, Component } from "react";
import { API_BASE_URL } from "./config";

export const ApplicationContext = createContext();

class ApplicationContextProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gameslides: [],
      filter: {
        word: "",
        quote: "",
        imageurl: ""
      }
    };
  }

  componentDidMount() {
    fetch(`${API_BASE_URL}gameslides`)
      .then(response => response.json())
      .then(results => {
        this.setState({
          gameslides: results
        });
        console.log(results);
      });
  }

  updateFilter = (word, quote, imageurl) => {
    this.setState({
      filter: { word, quote, imageurl }
    });
  };

  render() {
    const { word, quote, imageurl, filter } = this.state;
    const value = {
      word,
      quote,
      imageurl,
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

export default ApplicationContextProvider;
