import { useParams } from "react-router-dom";
import styled from "styled-components";
import { CharacterCard, Name } from "../components/Card";

export default function CardDetails({ cardArray }) {
  const { id } = useParams();
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
