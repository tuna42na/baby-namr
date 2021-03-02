import React from "react";
import { hot } from "react-hot-loader";
import List from "./components/list";
import Form from "./components/filterForm";

import { NameListProvider } from "./components/NameListContext";

class App extends React.Component {
  render() {
    return (
      <NameListProvider>
        <Form />
        <List />
      </NameListProvider>
    );
  }
}

export default App;
