import React, {useEffect, useCallback} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';

import { getMovie } from '../../api/fetchMovies'
import { setMovie, selectMovieState } from './movieSlice'
import { setSearch } from '../layout/search/searchSlice'

//Components
import ActorList from './actors'
import MovieInfo from './movieInfo'
import Recommendations from './recommendations'

//scss
import './movie.scss'

const Movie = () => {
    const { movie_id } = useParams()
    const movie = useSelector(selectMovieState);
    const dispatch = useDispatch();
    const stableDispatch = useCallback(dispatch, [dispatch])
    const stableMovieId = useCallback(movie_id, [movie_id])

    useEffect(() => {
        stableDispatch(setSearch(''))
        getMovie(stableMovieId).then(data => {
            stableDispatch(setMovie(data))
        })
    }, [stableDispatch, stableMovieId])

    const movieInfo = movie.data
    if(Object.keys(movie).length === 0) {
        return (
            <div>
                Incorrect ID
            </div>
    )} else{
        return (
            <div className="movie-info">
                <MovieInfo movieInfo={movieInfo} />
                <ActorList movieId={stableMovieId} />
                <Recommendations movieId={stableMovieId} />
            </div>
        )
    }
}

export default Movie
