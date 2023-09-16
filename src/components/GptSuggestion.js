import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptSuggestion = () => {
  const movieResults = useSelector((store) => store.gpt?.addMovie);
  const movieNames = useSelector((store) => store.gpt?.showMoviesResults);
  if (!movieResults || !movieNames) return null;

  return (
    <div className="p-4 m-4 backdrop-blur-lg rounded-xl">
      {movieNames.map((movieName, index) => (
        <MovieList
          key={movieName}
          title={movieName}
          movies={movieResults[index]}
        />
      ))}
    </div>
  );
};

export default GptSuggestion;
