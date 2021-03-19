import React from "react";
import axios from "axios";

let UserContext;
const { Provider, Consumer } = (UserContext = React.createContext());

// API Constants
const BASE_URL = "https://baby-namer-api.herokuapp.com";
const USER_URL = BASE_URL + "/users";
const LOGIN_URL = BASE_URL + "/login";
const PROFILE_URL = (id) => USER_URL + "/" + id;

class UserProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // Functional Exports
      addNewUser: this.addNewUser,
      deleteUser: this.deleteUser,
    };
  }

  // Add and Delete Actions
  addNewUser = (userData) => {
    axios.post(USER_URL, { userData }).then((res) => {
      console.log(res);
      console.log(res.data);
    });
  };

  deleteUser = (userId) => {
    axios.delete(PROFILE_URL(userId));
  };

  // Login Actions

  render() {
    return <Provider value={this.state}>{this.props.children}</Provider>;
  }
}

export { UserProvider, Consumer as UserConsumer, UserContext };