import React, { useState, useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import FormBox from "../styled/FormBox";
import Nav from "./Nav";

const SignUp = () => {
  const { addNewUser } = useContext(UserContext);
  // Local New User State Construction
  const [newUser, setNewUser] = useState({
    username: "",
    password: "",
    repassword: "",
  });

  // Input Field Handling
  const handleChange = (e) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addNewUser(newUser);
  };

  // Destructure for Form Usage;
  const { username, password, repassword } = newUser;

  return (
    <div>
      <Nav />
      <div className="page-container">
        <FormBox onSubmit={handleSubmit}>
          <h1> Create Account </h1>
          <span> Let's help you create a profile: </span>
          <div>
            <br />
            <input
              type="text"
              name="username"
              value={username}
              onChange={handleChange}
              placeholder="Username"
            />
            <br />
            <input
              type="password"
              name="password"
              value={password}
              onChange={handleChange}
              placeholder="Password"
            />
            <br />
            <input
              type="password"
              name="repassword"
              value={repassword}
              onChange={handleChange}
              placeholder="Retype Password"
            />
            <br />
            <input type="submit" />
          </div>
        </FormBox>
      </div>
    </div>
  );
};

export default SignUp;
