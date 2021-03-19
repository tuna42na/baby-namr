import React from "react";
import Nav from "./Nav";
import { Link } from "react-router-dom";
import FormBox from "../styled/FormBox";

const Login = () => {
  return (
    <div>
      <Nav />
      <div className="page-container">
        <FormBox>
          <h1>Login Page</h1>
          <span> This will be a login page </span>
          <br />
          <input placeholder="username" />
          <br />
          <input placeholder="password" />
          <br />
          Don't have an account? <Link to="/signup"> Create Account </Link>
        </FormBox>
      </div>
    </div>
  );
};

export default Login;
