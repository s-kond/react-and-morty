import { useContext } from "react";
import { UserContext } from "../util/UserContext";
import Card from "./Card";

export default function CardList() {
  const { cardArray } = useContext(UserContext);
  return (
    <div>
      {cardArray.map((card) => {
        return <Card key={card.id} cardData={card} />;
      })}
    </div>
  );
}
