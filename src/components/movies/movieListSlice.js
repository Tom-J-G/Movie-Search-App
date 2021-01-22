import { createSlice } from '@reduxjs/toolkit';

export const movieListSlice = createSlice({
  name: 'movieList',
  initialState: {
    movies: [],
  },
  reducers: {
    setMovies: (state, action) => {
      state.movies = action.payload;
    },
  },
});

export const { setMovies } = movieListSlice.actions;

export const selectMoviesState = state => state.movieList.movies;

export default movieListSlice.reducer;