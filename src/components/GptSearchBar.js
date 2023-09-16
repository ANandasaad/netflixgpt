import React, { useRef, useState } from "react";
import lang from "../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import openai from "../utils/openai";
import { API_KEY, API_OPTIONS } from "../utils/constants";
import { addGptMovie, addGptMovieResults } from "../utils/gptSlice";

const searchMoviesInTMDB = async (movie) => {
  const data = await fetch(
    `https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1&api_key=${API_KEY}`,
    API_OPTIONS
  );

  const json = await data.json();

  return json.results;
};

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const langKey = useSelector((store) => store.config?.lang);
  const searchText = useRef(null);
  const handleGptSearchClick = async () => {
    const search = searchText.current.value;

    //make an api call to gpt search and get movies results

    const gptQuery =
      "Act as Movie Recommendation System and suggest movies based on the user's input: " +
      search +
      ". Only gives me names of 10 Movies, commma seperated like the result given ahead. Example Result: The Dark Knight, The Dark Knight Rises, Batman Begins, The Prestige, Inception";
    const getResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });

    if (!getResults.choices) {
      //TODO: handle error
    }
    const gptMovies = getResults.choices?.[0]?.message.content.split(",");
    dispatch(addGptMovieResults(gptMovies));

    //make an api call to tmdb and get movies results
    const data = gptMovies.map((movie) => searchMoviesInTMDB(movie));
    const tmdbMovies = await Promise.all(data);
    console.log(tmdbMovies);
    dispatch(addGptMovie(tmdbMovies));
  };
  return (
    <div className="pt-[8%] flex  justify-center">
      <form
        className=" w-1/2 bg-black grid grid-cols-12 rounded-md"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="text"
          ref={searchText}
          className="p-4 m-4 col-span-9 "
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button
          className="py-2 px-4 mx-3 my-3 bg-red-700 rounded-md text-white col-span-3"
          onClick={handleGptSearchClick}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
