import styled from "styled-components";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <StyledNav>
      <StyledNavLink to="/">Home</StyledNavLink>
      <StyledNavLink to="/a">Favs</StyledNavLink>
      <StyledNavLink to="/b"></StyledNavLink>
      <StyledNavLink to="/c"></StyledNavLink>
    </StyledNav>
  );
}

const StyledNav = styled.nav`
  display: flex;
  position: fixed;
  bottom: 0;
  height: 100px;
  width: 100%;
  justify-content: space-around;
  align-items: center;
  background-color: blueviolet;
`;

const StyledNavLink = styled(NavLink)`
  content: " ";
  padding: 30px;
  background-color: white;
  border-radius: 100%;
  text-decoration: none;
  color: black;

  &:hover {
    text-decoration: underline;
  }

  &.active {
    background-color: lightgrey;
  }
`;
