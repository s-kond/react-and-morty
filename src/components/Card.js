import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { UserContext } from "../util/UserContext";
import { useContext } from "react";

export default function Card({ cardData }) {
  const { id, name, image } = cardData;
  const { handleAddFav } = useContext(UserContext);
  const navigate = useNavigate();

  return (
    <CharacterCard key={id}>
      <img src={image} alt="character" />
      <Name>{name}</Name>
      <StyledButton onClick={() => navigate(`/details/${id}`)}>
        Show more
      </StyledButton>
      <FavButton onClick={() => handleAddFav(id, cardData)}></FavButton>
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
  background-color: white;
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
