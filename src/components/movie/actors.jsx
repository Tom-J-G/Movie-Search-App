import React, {useEffect, useCallback, useState, useRef} from 'react'
import { useSelector, useDispatch } from 'react-redux';

import { getActors, MOVIEDB_IMAGE_URL } from '../../api/fetchMovies'
import {setActorList, selectActorListState} from './actorListSlice'

const ActorList = ({movieId}) => {
    const initialMount = useRef(true)
    const dispatch = useDispatch()
    const actorList = useSelector(selectActorListState)
    const stableDispatch = useCallback(dispatch, [dispatch])

    const [showAll, setShowAll] = useState(false)
    console.log(movieId)

    useEffect(() => {
        if(initialMount.current) {
            initialMount.current = false
            getActors(movieId).then(({data}) => {
                stableDispatch( setActorList(data.cast))
            })
        }
    }, [stableDispatch, movieId])

    const size = 6

    return (
        <div className="actors">
            { (actorList.length) ?
            <>
                <h2>Actors</h2>
                <ul>
                    {
                    actorList.slice(0, size).map((actor,i) => 
                        <li key={`actor${i}`}>
                        <div>
                            {(actor.profile_path === null) ? <div className="no-photo">No Photo<br/>Available</div> : <img src={MOVIEDB_IMAGE_URL.medium + actor.profile_path} alt={actor.name} /> }
                            <p>{actor.name}</p>
                        </div>
                        </li>
                    )}
                </ul>
            </> : <></>
            }
        </div>
    )
}

export default ActorList