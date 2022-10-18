import "./App.css";
import Header from "./components/Header";
import Card from "./components/Card";
import NavBar from "./components/NavBar";
import { useEffect, useState } from "react";

function App() {
  const [cardArray, setCardArray] = useState([]);

  useEffect(() => {
    fetchData(apiURL);
  }, []);

  const apiURL = "https://rickandmortyapi.com/api/character";

  async function fetchData(URL) {
    try {
      const response = await fetch(apiURL);
      const data = await response.json();
      console.log(data);
      setCardArray(data.results);
      console.log(cardArray);
    } catch (error) {
      console.error("Something went wrong: " + error.message);
    }
  }

  return (
    <div className="App">
      <Header />
      <div className="list">
        <Card />
        {cardArray.map((result) => {
          return <p>{result.name}</p>;
        })}
      </div>
      <NavBar />
    </div>
  );
}

export default App;
