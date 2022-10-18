import styled from "styled-components";

export default function NavBar() {
  return (
    <StyledNav>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
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

  div {
    content: " ";
    padding: 30px;
    background-color: white;
    border-radius: 100%;
  }
`;
