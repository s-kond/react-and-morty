import "./App.css";
import Home from "./pages/Home";
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import CardDetails from "./pages/CardDetails";

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
    <Routes>
      <Route index path="/" element={<Home cardArray={cardArray} />} />
      <Route
        path="/details/:id"
        element={<CardDetails cardArray={cardArray} />}
      />
    </Routes>
  );
}

export default App;
