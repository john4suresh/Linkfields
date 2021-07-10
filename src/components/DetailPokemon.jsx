/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const DetailPokemon = () => {
  let { id } = useParams();
  const [name, setName] = useState("");
  const [types, setTypes] = useState([]);

  useEffect(() => {
    const response = axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`);
    response.then((res) => {
      setTypes(res.data.types);
      setName(res.data.name);
    });
  }, []);

  function capitalize(word) {
    const lower = word.toLowerCase();
    return word.charAt(0).toUpperCase() + lower.slice(1);
  }

  return (
    <div className="detailPage">
      <div className="image">
        <img
          src={`https://pokeres.bastionbot.org/images/pokemon/${id}.png`}
          alt="Name"
        />
      </div>
      <div className="content">
        <h1>Name : {capitalize(name)}</h1>
        <h2>Types : </h2>
        {types.map((ele) => (
          <h2 key={ele.slot}>{capitalize(ele.type.name)}</h2>
        ))}
        <h1>
          <Link to="/">Go to Home</Link>
        </h1>
      </div>
    </div>
  );
};

export default DetailPokemon;
