import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const Basic = () => {
  let { id } = useParams();
  useEffect(() => {
    const response = axios.get(`https://pokeapi.co/api/v2/pokemon/${id}/`);
    response.then((res) => console.log(res));
  });

  return (
    <div>
      This is Component
      <img
        src={`https://pokeres.bastionbot.org/images/pokemon/${id}.png`}
        alt="Name"
      />
    </div>
  );
};

export default Basic;
