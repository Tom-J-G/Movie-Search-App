import React from 'react'

import { MOVIEDB_IMAGE_URL } from '../../api/fetchMovies'


const MovieListItem = ({movie}) => {

    return (
        <a href={'/movie/' + movie.id}>
            <div className="movie-list-item">
                {(movie.poster_path === null) ? <div className="no-photo">No Photo<br/>Available</div> : <img src={MOVIEDB_IMAGE_URL.medium + movie.poster_path}  alt={movie.title} />}
                <div className="movie-list-item-info">
                    <div>{movie.title}</div>
                    <p>{//movie.genres.map((x) => x.name)
                    }
                    </p>
                    <div className="rating">{movie.vote_average}</div>
                </div>
            </div>
        </a>
    )
}

export default MovieListItem