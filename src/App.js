import React from "react";
import List from "./components/List";
import Login from "./components/login";
import { Switch, Route } from "react-router-dom";
import { NameListProvider } from "./components/NameListContext";

const App = () => {
  return (
    <NameListProvider>
      <Switch>
        <Route path="/" component={List} exact />
        <Route path="/login" component={Login} />
      </Switch>
    </NameListProvider>
  );
};

export default App;
