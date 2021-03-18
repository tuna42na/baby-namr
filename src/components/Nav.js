import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Navigation = styled.nav`
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
`;

const HomeLink = styled(NavLink)`
  outline: 2px solid #2b4570;
  outline-offset: 7px;
  font-size: larger;
`;

const Nav = () => {
  return (
    <Navigation>
      <HomeLink to="/">Baby Namr</HomeLink>
      <NavLink to={"/login"}> Login </NavLink>
    </Navigation>
  );
};

export default Nav;
