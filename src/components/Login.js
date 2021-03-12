import React from "react";
import Nav from "./Nav";

const Login = () => {
  return (
    <div>
      <Nav />
      <h1>Login Page</h1>
      <div>
        <br />
        <input placeholder="username" />
        <br />
        <input placeholder="password" />
        <br />
        <input placeholder="retype password" />
      </div>
    </div>
  );
};

export default Login;
