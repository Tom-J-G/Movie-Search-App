import { createSlice } from '@reduxjs/toolkit';

export const actorListSlice = createSlice({
    name: 'actors',
    initialState: {
        actorList: [],
    },
    reducers: {
        setActorList: (state, action) => {
            state.actorList = action.payload;
        },
    },
})

export const { setActorList } = actorListSlice.actions;

export const selectActorListState = state => state.actors.actorList;

export default actorListSlice.reducer;
