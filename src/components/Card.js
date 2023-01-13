import React from "react";

const Card = ({ character }) => {
  return (
    <li className="card">
      <img src={character.image} alt={"Personnage" + character.name} />
      <div className="infos">
        <h2>{character.name}</h2>
        <h4>{character.species}</h4>
        <p>Status: {character.status}</p>
      </div>
    </li>
  );
};

export default Card;
