import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../utils/movieSlice";
import { API_KEY, API_OPTIONS } from "../utils/constants";

const getMovieVideo = async (movieId, dispatch) => {
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US&api_key=${API_KEY}`,
    API_OPTIONS
  );
  const json = await data.json();
  const trailer = json.results.filter((video) => video.type === "Trailer");
  const videoTrailer = trailer.length ? trailer : json.results[0];
  dispatch(addTrailerVideo(videoTrailer));
};

export const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();
  useEffect(() => {
    getMovieVideo(movieId, dispatch);
  }, []);
};
