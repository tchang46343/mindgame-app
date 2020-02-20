import React, { createContext, Component } from "react";

export const ApplicationContext = createContext();

class ApplicationContextProvider extends Component {
  constructor(props) {
    super(props);
    };
  }

  componentDidMount() {
    fetch("http://localhost:8000/users")
      .then(response => response.json())
      .then(response => {
        console.log(response);
      })
}

  
  render() 
    return (
    <div>
      <p>grjgengn</p>
    </div>
    );
  

//export default ApplicationContextProvider;
