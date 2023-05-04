import React from "react";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import SingleCocktail from "./components/SingleCocktail";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/cocktail/:id" element={<SingleCocktail />} />
      </Routes>
    </Router>
  );
};

export default App;