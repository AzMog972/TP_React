import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CharactersList from "./pages/CharactersList";
import About from "./pages/About";
import Home from "./pages/Home";
import { Provider } from "react-redux";
import store from "./store";

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="about" element={<Home />} />
          <Route path="/" element={<About />} />
          <Route path="/characters" element={<CharactersList />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
