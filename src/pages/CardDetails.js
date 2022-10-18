import { useParams } from "react-router-dom";
import styled from "styled-components";
import { CharacterCard, Name } from "../components/Card";
import Header from "../components/Header";
import NavBar from "../components/NavBar";

export default function CardDetails({ cardArray }) {
  const { id } = useParams();
  console.log(id);
  console.log(cardArray);
  const selectedCard = cardArray.filter((item) => item.id === +id);
  console.log(selectedCard);
  const { name, image, status, species, location, origin } = selectedCard[0];

  return (
    <div className="App">
      <Header />
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
      <NavBar />
    </div>
  );
}

const Details = styled.ul`
  margin-top: 10px;
  list-style: none;

  li {
    margin-bottom: 5px;
  }
`;
