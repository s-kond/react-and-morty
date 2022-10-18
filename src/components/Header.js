import styled from "styled-components";

export default function Header() {
  return (
    <Head>
      <h1>React and Morty</h1>
    </Head>
  );
}

const Head = styled.header`
  width: 100%;
  padding: 10px;
  color: white;
  background-color: blueviolet;
`;
