import React from 'react'
import { Input } from 'reactstrap'
import { useDispatch, useSelector } from 'react-redux';
import { searchMovies } from '../../../api/fetchMovies'
import { useLocation, useHistory } from 'react-router-dom';

//redux slice
import { setMovies } from '../../movies/movieListSlice';
import { setSearch, selectSearchState } from './searchSlice'

const SearchForm = () => {
    const dispatch = useDispatch()
    const {pathname}= useLocation()
    const history = useHistory()

    const search = useSelector(selectSearchState)

    const onChangeHandler = e => {
        const value = e.target.value
        dispatch(setSearch(value))
        if(value.length > 2){  
            if(pathname.includes('movie')) { history.push('/') } else {
                searchMovies({query: search, page: 1}).then(data => {
                    dispatch(setMovies(data.data.results))
                })
            }
            
        }
    }
    
    return (
        <div className="search-form">
            <Input
                name="search"
                type="text"
                placeholder="Movie Title"
                className="search"
                onChange={onChangeHandler}
                value={search}
            />
        </div>
    )
}

export default SearchForm
