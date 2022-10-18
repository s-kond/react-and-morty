import Header from "../components/Header";
import CardList from "../components/CardList";
import NavBar from "../components/NavBar";

export default function Home({ cardArray }) {
  return (
    <div className="App">
      <Header />
      <CardList cardDataArray={cardArray} />
      <NavBar />
    </div>
  );
}
