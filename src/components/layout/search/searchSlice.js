import { createSlice } from '@reduxjs/toolkit';

export const searchSlice = createSlice({
    name: 'search',
    initialState: {
        searchMovie: '',
    },
    reducers: {
        setSearch: (state, action) => {
            state.searchMovie = action.payload;
        },
    },
})

export const { setSearch } = searchSlice.actions;

export const selectSearchState = state => state.search.searchMovie;

export default searchSlice.reducer;