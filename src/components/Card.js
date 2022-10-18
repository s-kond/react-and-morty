import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function Card({ cardData }) {
  const { id, name, image } = cardData;
  const navigate = useNavigate();
  return (
    <CharacterCard key={id}>
      <img src={image} alt="character" />
      <Name>{name}</Name>
      <StyledButton onClick={() => navigate(`/details/${id}`)}>
        Show more
      </StyledButton>
    </CharacterCard>
  );
}

export const CharacterCard = styled.article`
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

export const Name = styled.p`
  margin: 20px auto;
`;
