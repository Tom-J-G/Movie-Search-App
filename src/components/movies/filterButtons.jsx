import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { getMovies } from '../../api/fetchMovies'
import { setMovies } from './movieListSlice'

const FilterButtons = () => {
    const dispatch = useDispatch()
    const [filter, setFilter] = useState('popular')

    const filterSearch = theFilter => {
        setFilter(theFilter)
        getMovies({filter: theFilter}).then(({data}) => {
            dispatch(setMovies(data.results))
        })
    }

    return (
        <div className="filters">
            <button className={(filter === 'popular') ? 'on' : ''} onClick={() => filterSearch('popular')}>Popular</button>
            <button className={(filter === 'now_playing') ? 'on' : ''} onClick={() =>filterSearch('now_playing')}>Now Playing</button>
            <button className={(filter === 'top_rated') ? 'on' : ''} onClick={() => filterSearch('top_rated')}>Top Rated</button>
            <button className={(filter === 'upcoming') ? 'on' : ''} onClick={() => filterSearch('upcoming')}>Upcoming</button>
        </div>
    )
}

export default FilterButtons
