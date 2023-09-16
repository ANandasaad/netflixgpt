import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS, MOVIE_URL } from "../utils/constants";
import { addNowPlayingMovies } from "../utils/movieSlice";
import { useEffect } from "react";
const getNowPlayingMovies = async (dispatch) => {
  try {
    const data = await fetch(MOVIE_URL, API_OPTIONS);
    const json = await data.json();
    dispatch(addNowPlayingMovies(json.results));
  } catch (error) {
    console.log("Error fetching now playing movies:", error);
  }
};
const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const nowPlayingMovies = useSelector(
    (state) => state.movies.nowPlayingMovies
  );
  useEffect(() => {
    !nowPlayingMovies && getNowPlayingMovies(dispatch);
  }, []);
};

export default useNowPlayingMovies;
