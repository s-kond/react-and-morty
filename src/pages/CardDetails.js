import { useParams } from "react-router-dom";
import styled from "styled-components";
import { CharacterCard, Name } from "../components/Card";
import { UserContext } from "../util/UserContext";
import { useContext, useEffect, useState } from "react";

export default function CardDetails() {
  const [favButtonColor, setFavButtonColor] = useState("white");
  const { handleAddFav, favArray } = useContext(UserContext);
  const { id } = useParams();
  const { cardArray } = useContext(UserContext);
  const selectedCard = cardArray.filter((item) => item.id === +id);
  const { name, image, status, species, location, origin } = selectedCard[0];

  useEffect(() => {
    function changeFavColor(id) {
      let check = favArray.filter((item) => item.id === +id);
      if (check.length === 0) {
        setFavButtonColor("white");
      } else if (check.length === 1) {
        setFavButtonColor("lightgreen");
      }
    }
    changeFavColor(+id);
  }, [favArray]);

  return (
    <CharacterCard key={+id}>
      <img src={image} alt="character" />
      <Name>{name}</Name>
      <Details>
        <li>Status: {status}</li>
        <li>Species: {species}</li>
        <li>Location: {location.name}</li>
        <li>Origin: {origin.name}</li>
      </Details>
      <FavButton
        onClick={() => {
          handleAddFav(+id, selectedCard[0]);
        }}
        style={{ backgroundColor: favButtonColor }}
      ></FavButton>
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

const FavButton = styled.button`
  position: absolute;
  top: -20px;
  right: -10px;
  border: 1px solid black;
  border-radius: 50%;
  width: 50px;
  height: 50px;

  &:hover {
    background-color: lightgrey;
    cursor: pointer;
  }
`;
