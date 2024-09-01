import { useEffect, useState } from "react";
import PokeCard from "./components/PokeCard";

function App() {
  const [pokeData, setPokeData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchPokeData = async () => {
      const response = await fetch(
        "https://pokeapi.co/api/v2/pokemon?limit=20"
      );
      const data = await response.json();
      setPokeData(data.results);
      // console.log(data.results)
    };
    fetchPokeData();
  }, []);
  return (
    <>
      <div className="App">
        <h1 className="lato-bold head">Pokemon List</h1>
        <input 
          type="text"
          placeholder="Search Pokemon"
          onChange={(e) => setSearchTerm(e.target.value.toLowerCase())}
        />
        <div className="pokemon-container">
          {pokeData
            .filter((poke) => poke.name.includes(searchTerm))
            .map((poke) => {
              // console.log(poke.url);
              return (
                <PokeCard key={poke.name} name={poke.name} url={poke.url} />
              );
            })}
          {pokeData.filter((poke) => poke.name.includes(searchTerm)).length ===
            0 && <h2>No Result Found</h2>}
        </div>
      </div>
    </>
  );
}

export default App;
