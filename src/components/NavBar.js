import styled from "styled-components";

export default function NavBar() {
  return (
    <Navbar>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </Navbar>
  );
}

const Navbar = styled.nav`
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
