import { hot } from "react-hot-loader";
import React from "react";
import List from "./components/list";
import Form from "./components/filterForm";

import { NameListProvider } from "./components/NameListContext";

const App = () => {
  return (
    <NameListProvider>
      <Form />
      <List />
    </NameListProvider>
  );
};

export default App;
