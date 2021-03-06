import React from 'react'
import { MOVIEDB_IMAGE_URL } from '../../api/fetchMovies'

const MovieInfo = ({ movieInfo }) => {

    return (
        <div className="top">
            <div className="image">
                <img src={MOVIEDB_IMAGE_URL.medium + movieInfo.poster_path} alt={movieInfo.title} />
            </div>
            <div className="detail">
                <div className="title"><h1>{movieInfo.title}</h1></div>
                <div className="tagline">{movieInfo.tagline}</div>
                <div className="desc">{movieInfo.overview}</div>
                <div className="genres">{(movieInfo.genres.length) ? <>
                    Genres: {movieInfo.genres.map((x, i) => 
                        <div key={i}>
                            {x.name}
                        </div>
                )}
                
                </>: <></>}</div>
                <div className="rating">{(movieInfo.vote_average.toString().length === 1) ? movieInfo.vote_average + '.0': movieInfo.vote_average}</div>
            </div>            
        </div>
    )
}

export default MovieInfo
