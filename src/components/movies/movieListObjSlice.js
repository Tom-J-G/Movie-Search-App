import { createSlice } from '@reduxjs/toolkit';

export const movieListObjSlice = createSlice({
  name: 'movieListObj',
  initialState: {
    moviesObj: {},
  },
  reducers: {
    setMoviesObj: (state, action) => {
      state.moviesObj = action.payload;
    },
  },
});

export const { setMoviesObj } = movieListObjSlice.actions;

export const selectMoviesObjState = state => state.movieListObj.moviesObj;

export default movieListObjSlice.reducer;
