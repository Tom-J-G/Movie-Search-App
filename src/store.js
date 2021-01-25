import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import movieListReducer from './components/movies/movieListSlice'
import movieListObjReducer from './components/movies/movieListObjSlice'
import movieReducer from './components/movie/movieSlice'
import actorListReducer from './components/movie/actorListSlice'
import searchReducer from './components/layout/search/searchSlice'

export default configureStore({
  reducer: {
    movieList: movieListReducer,
    movieListObj: movieListObjReducer,
    movie: movieReducer,
    actors: actorListReducer,
    search: searchReducer,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false
  }),
});
