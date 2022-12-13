import React, { useState, useContext } from "react";
import { MovieContext } from "./MovieContext";

const Nav = () => {
  const [movies, setMovies] = useContext(MovieContext);
  return (
    <nav>
      <h2>Sajeev</h2>
      <h2>No of Movies: {movies.length}</h2>
    </nav>
  );
};

export default Nav;