import React, { useState, useContext } from "react";
import Nav from "./Nav";
import { UserContext } from "../contexts/UserContext";
import { Link } from "react-router-dom";
import Button from "../styled/Button";
import FormBox from "../styled/FormBox";

const Login = () => {
  const [login, setLogin] = useState({
    username: "",
    password: "",
  });
  const { currentUser, loginUser } = useContext(UserContext);

  // Handle user and password state
  const handleChange = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    loginUser(login);
  };

  // Destructure state
  const { username, password } = login;

  return (
    <div>
      <Nav />
      <div className="page-container">
        {currentUser ? (
          <FormBox>
            <h1> Welcome back, {currentUser}!</h1>
            <Link to="/">Home</Link>
          </FormBox>
        ) : (
          <FormBox onSubmit={handleSubmit}>
            <h1>User Login</h1>
            <br />
            <input
              placeholder="Username"
              name="username"
              value={username}
              onChange={(e) => {
                handleChange(e);
              }}
            />
            <br />
            <input
              placeholder="Password"
              name="password"
              type="password"
              value={password}
              onChange={(e) => {
                handleChange(e);
              }}
            />
            <br />
            <Button type="submit"> Login </Button>
            <p>Don't have an account?</p>
            <br />
            <Link to="/signup"> Create Account </Link>
          </FormBox>
        )}
      </div>
    </div>
  );
};

export default Login;
