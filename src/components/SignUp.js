import React from "react";
import Nav from "./Nav";

const CreateAccount = () => {
  return (
    <div>
      <Nav />
      <h1>Sign Up Page</h1>
      <span> This will be a login page </span>
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

export default CreateAccount;
