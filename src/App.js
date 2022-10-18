import "./App.css";
import Header from "./components/Header";
import Card from "./components/Card";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="list">
        <Card />
      </div>
      <NavBar />
    </div>
  );
}

export default App;
