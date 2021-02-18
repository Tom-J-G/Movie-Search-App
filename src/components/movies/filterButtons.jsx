import React from 'react'

const FilterButtons = ({filterSearch, filter}) => {

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
