import React, { useContext } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";

const Navigation = styled.nav`
  position: sticky;
  top: 0px;
  height: 10vh;
  background-color: #17bebb;
  color: #2b4570;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`;

const NavLink = styled(Link)`
  color: #2b4570;
  text-decoration: none;
  font-size: 3vh;
`;

const HomeLink = styled(NavLink)`
  outline: 2px solid #2b4570;
  outline-offset: 7px;
  font-size: 3.5vh;
`;

const Nav = () => {
  const { currentUser } = useContext(UserContext);
  return (
    <Navigation>
      <HomeLink to="/">Baby Namr</HomeLink>
      {currentUser ? (
        <NavLink>{currentUser}</NavLink>
      ) : (
        <NavLink to={"/login"}> Login </NavLink>
      )}
    </Navigation>
  );
};

export default Nav;
