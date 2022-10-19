import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { UserContext } from "../util/UserContext";
import { useContext } from "react";
import { useState } from "react";

export default function Card({ cardData }) {
  const [favButtonColor, setFavButtonColor] = useState("white");
  const { id, name, image } = cardData;
  const { handleAddFav, favArray } = useContext(UserContext);
  const navigate = useNavigate();

  function changeFavColor(id) {
    let check = favArray.filter((item) => item.id === id);
    console.log(check);
    console.log(check.length);
    if (check.length === 0) {
      setFavButtonColor("lightgreen");
    } else if (check.length === 1) {
      setFavButtonColor("white");
    }
  }

  return (
    <CharacterCard key={id}>
      <img src={image} alt="character" />
      <Name>{name}</Name>
      <StyledButton onClick={() => navigate(`/details/${id}`)}>
        Show more
      </StyledButton>
      <FavButton
        onClick={() => {
          changeFavColor(id);
          handleAddFav(id, cardData);
        }}
        style={{ backgroundColor: favButtonColor }}
      ></FavButton>
    </CharacterCard>
  );
}

export const CharacterCard = styled.article`
  position: relative;
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

export const Name = styled.p`
  margin: 20px auto;
`;
