import React, {useEffect, useCallback} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getMovies, searchMovies } from '../../api/fetchMovies'

//React slices
import { setMovies, selectMoviesState } from './movieListSlice'
import { selectSearchState } from '../layout/search/searchSlice'

//Components
import MovieListItem from './movieListItem'
import FilterButtons from './filterButtons'

//scss
import './movieList.scss'

const Movies = () => {
    const dispatch = useDispatch();
    const stableDispatch = useCallback(dispatch, [dispatch])

    const movieList = useSelector(selectMoviesState);
    const search = useSelector(selectSearchState)

    useEffect(() => {
        if(search.length) {
            searchMovies({query: search, page: 1}).then(data => {
                stableDispatch(setMovies(data.data.results))
            })
        } else {
            getMovies({filter: 'popular'}).then(({data}) => {
                stableDispatch(setMovies(data.results))
            })
        }
    }, [stableDispatch, search])

    return (
        <div className="movie-list">
            <FilterButtons />
            {(movieList.length) ?
                <ul>
                    {
                        movieList.map((movie, i) => <li key={`movie${i}`}><MovieListItem movie={movie} /></li>) 
                    }
                </ul> :
                <div className="center">No Results were Found</div>
            }
            
        </div>
    )
}

export default Movies
