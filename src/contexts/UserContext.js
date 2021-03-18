import React from "react";
import axios from "axios";

let UserContext;
const { Provider, Consumer } = (UserContext = React.createContext());

class UserProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // Functional Exports
      addNewUser: this.addNewUser,
    };
  }

  // Add and Delete Users
  addNewUser = (userData) => {
    console.log(userData);
    // axios.post(``, { userData }).then((res) => {
    //   console.log(res);
    //   console.log(res.data);
    // });
  };

  render() {
    return <Provider value={this.state}>{this.props.children}</Provider>;
  }
}

export { UserProvider, Consumer as UserConsumer, UserContext };
