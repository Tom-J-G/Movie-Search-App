import { createSlice } from '@reduxjs/toolkit';

export const movieSlice = createSlice({
  name: 'movie',
  initialState: {
    movieInfo: {},
  },
  reducers: {
    setMovie: (state, action) => {
      state.movieInfo = action.payload;
    },
  },
});

export const { setMovie } = movieSlice.actions;

export const selectMovieState = state => state.movie.movieInfo;

export default movieSlice.reducer;