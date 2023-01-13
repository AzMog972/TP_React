import React from "react";
import Logo from "../components/Logo";
import Navigation from "../components/Navigation";

const About = () => {
  return (
    <div>
      <Logo />
      <Navigation />
      <h1>Site réalisé par Martial Josue</h1>
      <h3>API utilisé : https://rickandmortyapi.com/api/character</h3>
    </div>
  );
};

export default About;
