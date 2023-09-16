import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS, POPULAR_MOVIES_URL } from "../utils/constants";
import { addPopularMovies } from "../utils/movieSlice";
import { useEffect } from "react";
const getPopularMovies = async (dispatch) => {
  try {
    const data = await fetch(POPULAR_MOVIES_URL, API_OPTIONS);
    const json = await data.json();
    dispatch(addPopularMovies(json.results));
  } catch (error) {
    console.log("Error fetching now playing movies:", error);
  }
};
const usePopularMovies = () => {
  const dispatch = useDispatch();
  const popularMovies = useSelector((store) => store.movies?.popularMovies);
  useEffect(() => {
    !popularMovies && getPopularMovies(dispatch);
  }, []);
};

export default usePopularMovies;
