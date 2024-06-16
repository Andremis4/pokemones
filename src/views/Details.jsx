import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react';

const URL = "https://pokeapi.co/api/v2/pokemon/";
const Details = () => {
    const {name} = useParams();
    const [personaje, setPersonaje] = useState({});

    const getData = async () => {
        try {
          
          const response = await fetch(URL+name);
          const results = await response.json();
          setPersonaje(results);
        } catch (error) {
          console.log("se fueron los pokemones:(");
        }
      };
    console.log(personaje);

      useEffect(() => {
        getData();
      }, [name]);
    
  return (
   <>
<div className="container mt-5">
      <div className="row">
        <div className="col-md-6 d-flex justify-content-center">
          <img src={personaje?.sprites?.front_default} alt={personaje?.name} className=" pokemon-image" />
        </div>
        <div className="col-md-6">
          <h1>{personaje?.name}</h1>
          {personaje?.stats && (
            <ul className="list-group">
              <li className="list-group-item">HP: {personaje.stats[0].base_stat}</li>
              <li className="list-group-item">Attack: {personaje.stats[1].base_stat}</li>
              <li className="list-group-item">Defense: {personaje.stats[2].base_stat}</li>
              <li className="list-group-item">Special Attack: {personaje.stats[3].base_stat}</li>
              <li className="list-group-item">Special Defense: {personaje.stats[4].base_stat}</li>
              <li className="list-group-item">Speed: {personaje.stats[5].base_stat}</li>
            </ul>
          )}
        </div>
      </div>
    </div>
   </>
  )
}

export default Details

