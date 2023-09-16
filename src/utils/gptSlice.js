import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false,
    addMovie: null,
    showMoviesResults: null,
  },
  reducers: {
    toggleGptSearch: (state, action) => {
      state.showGptSearch = !state.showGptSearch;
    },
    addGptMovie: (state, action) => {
      state.addMovie = action.payload;
    },
    addGptMovieResults: (state, action) => {
      state.showMoviesResults = action.payload;
    },
  },
});

export const { toggleGptSearch, addGptMovie, addGptMovieResults } =
  gptSlice.actions;
export default gptSlice.reducer;
