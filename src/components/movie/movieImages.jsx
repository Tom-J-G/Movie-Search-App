import React, { useState, useEffect, useRef } from 'react';

import { getMovieImages} from '../../api/fetchMovies'

import ImageCarousel from '../../utils/carousel'

const MovieImages = ({movieId}) => {
    const initialMount = useRef()
    const [images, setImages] = useState([])

    useEffect(() => {
        if (initialMount.current) {
            initialMount.current = false
            getMovieImages(movieId).then(({data}) => {
                console.log(data.backdrops)
                setImages(data.backdrops)
            })
        }
    }, [movieId])

    return (
        <div className="movie-images">
            <h2>Gallery</h2>
            <ImageCarousel items={images} title="movie_image" />
        </div>
    )
}

export default MovieImages
