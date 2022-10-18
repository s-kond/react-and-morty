import styled from "styled-components";

export default function Card() {
  return (
    <CharacterCard>
      <img
        src="https://rickandmortyapi.com/api/character/avatar/2.jpeg"
        alt="character"
      />
      <p>Morty Smith</p>
      <button>Show more</button>
    </CharacterCard>
  );
}

const CharacterCard = styled.article`
  padding: 20px;
  margin: 20px auto;
  border: 3px solid black;
  border-radius: 10px;
  width: 300px;
`;
