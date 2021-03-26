import React from "react";
import List from "./components/List";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import { Switch, Route } from "react-router-dom";
import { NameListProvider } from "./contexts/NameListContext";
import { UserProvider } from "./contexts/UserContext";

const App = () => {
  return (
    <NameListProvider>
      <UserProvider>
        <Switch>
          <Route path="/" component={List} exact />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={SignUp} />
        </Switch>
      </UserProvider>
    </NameListProvider>
  );
};

export default App;
