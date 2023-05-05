import React from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import SingleCocktail from "./components/SingleCocktail";
import Home from "./components/Home";

const App = () => {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/cocktail/:id" element={<SingleCocktail />} />
      </Routes>
    </Router>
  );
};

export default App;