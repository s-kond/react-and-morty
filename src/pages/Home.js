import CardList from "../components/CardList";
import { UserContext } from "../util/UserContext";
import { useContext } from "react";

export default function Home() {
  const { cardArray } = useContext(UserContext);
  return <CardList cardDataArray={cardArray} />;
}
