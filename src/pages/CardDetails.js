import { useParams } from "react-router-dom";
import styled from "styled-components";
import { CharacterCard, Name } from "../components/Card";
import { UserContext } from "../util/UserContext";
import { useContext } from "react";

export default function CardDetails() {
  const { id } = useParams();
  const { cardArray } = useContext(UserContext);
  const selectedCard = cardArray.filter((item) => item.id === +id);
  const { name, image, status, species, location, origin } = selectedCard[0];

  return (
    <CharacterCard key={id}>
      <img src={image} alt="character" />
      <Name>{name}</Name>
      <Details>
        <li>Status: {status}</li>
        <li>Species: {species}</li>
        <li>Location: {location.name}</li>
        <li>Origin: {origin.name}</li>
      </Details>
    </CharacterCard>
  );
}

const Details = styled.ul`
  margin-top: 10px;
  list-style: none;

  li {
    margin-bottom: 5px;
  }
`;
