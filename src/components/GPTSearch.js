import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptSuggestion from "./GptSuggestion";
import { BG_NETFLIX_URL, NetflixLogo, logo } from "../utils/constants";

const GPTSearch = () => {
  return (
    <div>
      <div className="absolute -z-10">
        <img src={BG_NETFLIX_URL} alt="Background" />
      </div>
      <GptSearchBar />
      <GptSuggestion />
    </div>
  );
};

export default GPTSearch;
