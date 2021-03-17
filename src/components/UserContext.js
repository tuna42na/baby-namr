import React from "react";
import axios from "axios";

let UserContext;
const { Provider, Consumer } = (UserContext = React.createContext());

class UserProvider extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <Provider value={this.state}>{this.props.children}</Provider>;
  }
}

export { UserProvider, Consumer as UserConsumer, UserContext };
