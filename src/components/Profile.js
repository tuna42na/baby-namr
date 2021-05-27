import React, { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import PageContainer from "../styled/PageContainer";
import FormBox from "../styled/FormBox";
import Nav from "./Nav";

const Profile = () => {
  let { currentUser, logoutUser } = useContext(UserContext);

  let handleLogout = () => {
    logoutUser();
    setTimeout(() => {
      window.location = "./";
    }, 1000);
  };

  let handleSave = () => {};

  return (
    <>
      <Nav />
      {currentUser ? (
        <PageContainer>
          <FormBox>
            <div>This is the profile for {currentUser} </div>
            <button onClick={handleSave}> Save </button>
            <button onClick={handleLogout}> Logout </button>
            <button> Delete Account </button>
          </FormBox>
        </PageContainer>
      ) : (
        <h1>LogOut Succesful!</h1>
      )}
    </>
  );
};

export default Profile;
