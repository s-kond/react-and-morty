import styled from "styled-components";

export default function Header() {
  return (
    <StyledHeader>
      <h1>React and Morty</h1>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  width: 100%;
  padding: 10px;
  color: white;
  background-color: blueviolet;
  text-align: center;
`;
