import { useContext } from "react";
import Card from "../components/Card";
import { UserContext } from "../util/UserContext";

export default function Favorites() {
  const { favArray } = useContext(UserContext);

  return (
    <>
      {favArray.map((card) => {
        return <Card key={card.id} cardData={card} />;
      })}
    </>
  );
}
