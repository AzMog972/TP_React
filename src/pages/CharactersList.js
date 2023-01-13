import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "../components/Card";
import Logo from "../components/Logo";
import Navigation from "../components/Navigation";
import { connect } from "react-redux";

function CharactersList() {
  const [characters, setCharacters] = useState([]);
  const [rangeValue, setRangeValue] = useState(36);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedGender, setSelectedGender] = useState("");
  const genders = ["Male", "Female"];

  useEffect(() => {
    let isCancelled = false;

    const fetchData = async (page = 1) => {
      try {
        const res = await axios.get(
          `https://rickandmortyapi.com/api/character?page=${page}`
        );
        if (!isCancelled) {
          setCharacters((prevCharacters) => [
            ...prevCharacters,
            ...res.data.results,
          ]);
          if (res.data.info.next) {
            fetchData(page + 1);
          } else {
            setIsLoading(false);
          }
        }
      } catch (err) {
        if (!isCancelled) {
          setError(err);
          setIsLoading(false);
        }
      }
    };

    fetchData();

    return () => {
      isCancelled = true;
    };
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div className="characters">
      <Logo />
      <Navigation />
      <ul className="radio-container">
        <input
          type="range"
          min="1"
          max="823"
          defaultValue={rangeValue}
          onChange={(e) => setRangeValue(e.target.value)}
        />
        {genders.map((gender) => (
          <li key={gender}>
            <input
              type="radio"
              id={gender}
              name="genderRadio"
              onChange={(e) => setSelectedGender(e.target.id)}
            />
            <label htmlFor={gender}>{gender}</label>
          </li>
        ))}
      </ul>
      <h1>Characters</h1>
      <ul>
        {characters
          .filter((character) => character.gender === selectedGender)
          .slice(0, rangeValue)
          .map((character, index) => (
            <Card character={character} />
          ))}
      </ul>
    </div>
  );
}
const mapStateToProps = (state) => ({
  characters: state.characters,
});

export default connect(mapStateToProps)(CharactersList);
