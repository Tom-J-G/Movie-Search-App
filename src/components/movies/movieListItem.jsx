import React from 'react'

import { MOVIEDB_IMAGE_URL } from '../../api/fetchMovies'


const MovieListItem = ({movie}) => {

    return (
        <a href={'/movie/' + movie.id}>
            <div className="movie-list-item">
                <img src={MOVIEDB_IMAGE_URL.medium + movie.poster_path}  alt={movie.title} />
                <div className="movie-list-item-info">
                    <div>{movie.title}</div>
                    <p>{//movie.genres.map((x) => x.name)
                    }
                    </p>
                </div>
            </div>
        </a>
    )
}

export default MovieListItem