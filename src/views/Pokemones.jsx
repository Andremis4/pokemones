import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const URL = "https://pokeapi.co/api/v2/pokemon";

function Pokemones() {
  const [pokemones, setPokemones] = useState([]);
  const [nombre, setNombre] = useState("");
  const navigate = useNavigate();

  const getData = async () => {
    try {
      const response = await fetch(URL);
      const { results } = await response.json();
      setPokemones(results);
    } catch (error) {
      console.log("se fueron los pokemones:(");
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="pokemon-container">
      <select onChange={(e) => setNombre(e.target.value)}>
        <option value="" disabled>Elige tu Pokemon 👀</option>
        {pokemones.map(({ name }) => (
          <option key={name} value={name}>
            {name}
          </option>
        ))}
      </select>
      <button
        className="m-3 btn btn-primary"
        onClick={() => navigate(`/pokemones/${nombre}`)}
      >
        Mira tu opcion
      </button>
    </div>
  );
}

export default Pokemones;
