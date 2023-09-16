import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptSuggestion from "./GptSuggestion";
import { BG_NETFLIX_URL } from "../utils/constants";

const GPTSearch = () => {
  return (
    <div>
      <div className="fixed -z-10">
        <img src={BG_NETFLIX_URL} alt="Background" />
      </div>
      <GptSearchBar />
      <GptSuggestion />
    </div>
  );
};

export default GPTSearch;
