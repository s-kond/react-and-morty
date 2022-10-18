import "./App.css";
import Header from "./components/Header";
import CardList from "./components/CardList";
import NavBar from "./components/NavBar";
import { useEffect, useState } from "react";

function App() {
  const [cardArray, setCardArray] = useState([]);

  useEffect(() => {
    const apiURL = "https://rickandmortyapi.com/api/character";
    async function fetchData(URL) {
      try {
        const response = await fetch(apiURL);
        const data = await response.json();
        console.log(data);
        setCardArray(data.results);
      } catch (error) {
        console.error("Something went wrong: " + error.message);
      }
    }
    fetchData(apiURL);
  }, []);

  return (
    <div className="App">
      <Header />
      <CardList cardDataArray={cardArray} />
      <NavBar />
    </div>
  );
}

export default App;
