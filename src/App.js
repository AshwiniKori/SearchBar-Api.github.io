import { useState } from "react";

import "./App.css";
import { SearchBar } from "./Components/SearchBar";
import { SearchResultsList } from "./Components/SearchResultList";

function App() {
  const [results, setResults] = useState([]);

  return (
    <div className="App">
      <h1 style={{paddingTop:"50px", fontSize:"50px"}}>Search Bar</h1>
      <div className="search-bar-container">
        <SearchBar setResults={setResults} />
        {results && results.length > 0 && <SearchResultsList results={results} />}
      </div>
    </div>
  );
}

export default App;

