import "./App.css";

function App() {
  return (
    <div className="App">
      <header>
        <h1>React and Morty</h1>
      </header>
      <div className="list">
        <article className="card">
          <img
            src="https://rickandmortyapi.com/api/character/avatar/2.jpeg"
            alt="character"
          />
          <p>Morty Smith</p>
          <button>Show more</button>
        </article>
      </div>
      <nav>
        <div className="icon"></div>
        <div className="icon"></div>
        <div className="icon"></div>
        <div className="icon"></div>
      </nav>
    </div>
  );
}

export default App;
