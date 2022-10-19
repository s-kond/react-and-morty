import "./App.css";
import Home from "./pages/Home";
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import CardDetails from "./pages/CardDetails";
import Layout from "./components/Layout";

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
      <Route path="/" element={<Layout />}>
        <Route index element={<Home cardArray={cardArray} />} />
        <Route
          path="details/:id"
          element={<CardDetails cardArray={cardArray} />}
        />
        <Route
          path="/*"
          element={<h1>Diese Seite existiert leider nicht.</h1>}
        />
      </Route>
    </Routes>
  );
}

export default App;
