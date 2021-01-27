import React, {useEffect, useState} from 'react'

import { getRecommendations, MOVIEDB_IMAGE_URL } from '../../api/fetchMovies'

const Recommendations = ({ movieId }) => {
    const [recommendations, setRecommendations] = useState([])

    useEffect(() => {
        getRecommendations(movieId).then(({data}) => {
            setRecommendations(data.results)
        })
    }, [movieId])

    return (
        <div className="recommendations">
            {(recommendations.length) ? <>
            <h2>Recommendations</h2>
            <ul>
                {(recommendations.slice(0, 6).map((movie, i) => 
                    <li key={i}>
                        <a href={'/movie/' + movie.id}>
                            <div className="movie-recommend">
                                <img src={MOVIEDB_IMAGE_URL.medium + movie.poster_path}  alt={movie.title} />
                                <div className="movie-title">{movie.title}</div>
                            </div>
                        </a>
                    </li>
                ))}
            </ul>
            </> :
            <></>}
        </div>
    )
}

export default Recommendations
