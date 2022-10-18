import { useState } from "react";
import styled from "styled-components";

export default function Card({ cardData }) {
  const { id, name, image, status, species, location, origin } = cardData;
  const [toggle, setToggle] = useState(false);
  return (
    <CharacterCard key={id}>
      <img src={image} alt="character" />
      <Name>{name}</Name>
      <StyledButton onClick={() => setToggle(!toggle)}>Show more</StyledButton>
      <Details style={{ display: toggle ? "unset" : "none" }}>
        <li>Status: {status}</li>
        <li>Species: {species}</li>
        <li>Location: {location.name}</li>
        <li>Origin: {origin.name}</li>
      </Details>
    </CharacterCard>
  );
}

const CharacterCard = styled.article`
  padding: 20px;
  margin: 20px auto;
  border: 3px solid black;
  border-radius: 10px;
  width: 400px;

  &:last-of-type {
    margin-bottom: 140px;
  }
`;

const StyledButton = styled.button`
  margin-bottom: 20px;
  padding: 5px;
`;

const Details = styled.ul`
  margin-top: 10px;
  list-style: none;

  li {
    margin-bottom: 5px;
  }
`;

const Name = styled.p`
  margin: 20px auto;
`;
