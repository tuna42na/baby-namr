import React from "react";
import ReactDOM from "react-dom";
import "@babel/polyfill";
import App from "./App";
import "./styles.css";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("app")
);
