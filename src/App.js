import React from "react";
import { hot } from "react-hot-loader";
import List from "./components/list";
import Form from "./components/filterForm";
import { Switch, Route } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <div>
        <Form />
        <List />
      </div>
    );
  }
}

export default App;
