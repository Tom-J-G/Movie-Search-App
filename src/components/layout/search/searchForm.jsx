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
        console.log(value)
        dispatch(setSearch(value.toLowerCase()))
        if(value.length > 2){  
            console.log(value.length)
            if(pathname.includes('movie')) { history.push('/') }
            
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
