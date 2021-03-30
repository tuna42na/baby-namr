import React, { useState, useContext, useEffect } from "react";
import { UserContext } from "../contexts/UserContext";
import FormBox from "../styled/FormBox";
import Nav from "./Nav";
import Button from "../styled/Button";

const SignUp = () => {
  const { addNewUser, submissionSuccess, currentUser } = useContext(
    UserContext
  );

  // Local New User State Construction
  const [newUser, setNewUser] = useState({
    username: "",
    email: "",
    password: "",
    re_password: "",
  });
  const [validations, setValidations] = useState({
    userValidated: false,
  });

  // Update Validation Checking
  useEffect(() => {
    checkValidation();
  }, [newUser]);

  // Check Validation
  const { userValidated } = validations;
  const checkValidation = () => {
    let userTest = username.length > 4 && username.length < 25;
    let passwordTest = password == re_password && password.length > 7;
    let allTests = userTest && passwordTest;
    if (allTests) {
      setValidations({ ...validations, userValidated: true });
    } else {
      setValidations({ ...validations, userValidated: false });
    }
  };

  // Input Field Handling
  const handleChange = (e) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  };

  // Submission Button
  const handleSubmit = (e) => {
    e.preventDefault();
    userValidated
      ? addNewUser(newUser)
      : alert(
          "Oh no! Something went wrong. Check to make sure that your Username and Passwords are correct and try again."
        );
  };

  // Destructure for Form Usage;
  const { username, email, password, re_password } = newUser;

  return (
    <div>
      <Nav />
      <div className="page-container">
        {!submissionSuccess ? (
          <FormBox onSubmit={handleSubmit}>
            <h1> Create Account </h1>
            <span> Let's help you create a profile: </span>
            <br />

            <input
              name="username"
              title="Enter a name between 4 and 25 Characters"
              type="text"
              value={username}
              onChange={handleChange}
              placeholder="Username"
              required
            />
            <br />
            <input
              name="email"
              title="Enter your email here"
              type="email"
              value={email}
              onChange={handleChange}
              placeholder="Email"
              required
            />
            <br />
            <input
              name="password"
              title="Enter a password 8 characters or longer"
              type="password"
              value={password}
              onChange={handleChange}
              placeholder="Password"
              required
            />
            <br />
            <input
              name="re_password"
              title="Please re-enter the password from above"
              type="password"
              value={re_password}
              onChange={handleChange}
              placeholder="Retype Password"
              required
            />
            <br />
            <Button type="submit">Submit</Button>
          </FormBox>
        ) : (
          <FormBox>
            <h1>Welcome {currentUser}</h1>
          </FormBox>
        )}
      </div>
    </div>
  );
};

export default SignUp;
