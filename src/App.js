import "./App.css";
import Home from "./pages/Home";
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import CardDetails from "./pages/CardDetails";
import Layout from "./components/Layout";
import { UserContext } from "./util/UserContext";

function App() {
  const [cardArray, setCardArray] = useState([]);
  const [favArray, setFavArray] = useState([]);

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

  function handleAddFav(id, card) {
    let check = favArray.filter((item) => item.id === id);
    if (check.length > 0) {
      setFavArray(favArray.filter((item) => item.id !== id));
    } else {
      setFavArray([card, ...favArray]);
    }
  }

  return (
    <UserContext.Provider value={{ cardArray, favArray, handleAddFav }}>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/details/:id" element={<CardDetails />} />
          <Route
            path="/*"
            element={<h1>Diese Seite existiert leider nicht.</h1>}
          />
        </Route>
      </Routes>
    </UserContext.Provider>
  );
}

export default App;
