import React from "react";

const { Provider, Consumer } = React.Context();

class NameList extends React.Component {
  state = {
    list: [],
    listView: [],
    preferences: [],
  };

  render() {
    return <Provider>{this.props.children}</Provider>;
  }
}

export { UserProvider, Consumer as UserConsumer };
