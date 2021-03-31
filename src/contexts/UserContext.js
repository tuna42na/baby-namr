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
      currentUser: "",
      token: "",
      submissionSuccess: false,
      // Functional Exports
      addNewUser: this.addNewUser,
      deleteUser: this.deleteUser,
      loginUser: this.loginUser,
    };
  }

  // Add and Delete Actions
  addNewUser = (userData) => {
    axios
      .post(USER_URL, { ...userData })
      .then((res) => {
        console.log(res);
        this.setState({ submissionSuccess: true, userName: res.data.username });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  deleteUser = (userId) => {
    axios.delete(PROFILE_URL(userId));
  };

  // Login Actions
  loginUser = (userData) => {
    axios
      .post(LOGIN_URL, { ...userData })
      .then((res) => {
        const userReturn = res.data.user.username;
        const userToken = res.data.user.token;
        this.setState({ currentUser: userReturn, token: userToken });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return <Provider value={this.state}>{this.props.children}</Provider>;
  }
}

export { UserProvider, Consumer as UserConsumer, UserContext };
