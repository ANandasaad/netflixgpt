import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS, UPCOMING_MOVIES_URL } from "../utils/constants";
import { addUpcomingMovies } from "../utils/movieSlice";
import { useEffect } from "react";
const getUpcomingMovies = async (dispatch) => {
  try {
    const data = await fetch(UPCOMING_MOVIES_URL, API_OPTIONS);
    const json = await data.json();
    dispatch(addUpcomingMovies(json.results));
  } catch (error) {
    console.log("Error fetching now playing movies:", error);
  }
};
const useUpcomingMovies = () => {
  const dispatch = useDispatch();
  const upcomingMovies = useSelector((store) => store.movies?.upcomingMovies);
  useEffect(() => {
    !upcomingMovies && getUpcomingMovies(dispatch);
  }, []);
};

export default useUpcomingMovies;
