import React, { useState, useEffect } from 'react';

import { getMovieImages} from '../../api/fetchMovies'

import ImageCarousel from '../../utils/carousel'


const MovieImages = ({movieId}) => {
    const [images, setImages] = useState([])

    useEffect(() => {
        getMovieImages(movieId).then(({data}) => {
            console.log(data.backdrops)
            setImages(data.backdrops)
        })
    }, [])

    return (
        <div className="movie-images">
            <h2>Gallery</h2>
            <ImageCarousel items={images} title="movie_image" />
        </div>
    )
}

export default MovieImages
