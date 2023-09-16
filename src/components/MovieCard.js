import React from "react";
import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ poster_path }) => {
  if (!poster_path) return null;
  return (
    <div className="w-48 pr-4 ">
      <img
        className="rounded-md"
        src={IMG_CDN_URL + poster_path}
        alt="movie card"
      />
    </div>
  );
};

export default MovieCard;
