import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Navigation = styled.nav`
  height: 2em;
  background-color: grey;
  color: white;
  display: flex;
  justify-content: space-between;
  padding: 5px;
`;

const Nav = () => {
  return (
    <Navigation>
      <Link to="/">Baby Namr</Link>
      <Link to={"/login"}> Login </Link>
    </Navigation>
  );
};

export default Nav;
