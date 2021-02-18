import React, {useEffect, useCallback, useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getMovies, searchMovies } from '../../api/fetchMovies'
import ReactPaginate from "react-paginate"

//React slices
import { setMovies, selectMoviesState } from './movieListSlice'
import { selectSearchState, setSearch } from '../layout/search/searchSlice'

//Components
import MovieListItem from './movieListItem'
import FilterButtons from './filterButtons'

//scss
import './movieList.scss'

const Movies = () => {
    const dispatch = useDispatch();
    const stableDispatch = useCallback(dispatch, [dispatch])
    const [totalPages, setTotalPages] = useState(0)
    const [page, setPage] = useState(0)
    const [filter, setFilter] = useState('popular')

    const movieList = useSelector(selectMoviesState);
    const search = useSelector(selectSearchState)

    useEffect(() => {
        if(search.length > 2) {
            console.log('test')
            setPage(0)
            searchMovies({query: search, page: 1}).then(({data}) => {
                stableDispatch(setMovies(data.results))
                setTotalPages(data.totalPages)
            })
        } else if(search.length === 0 && filter === 'popular') {
            getMovies({filter: 'popular'}).then(({data}) => {
                stableDispatch(setMovies(data.results))
                setTotalPages(data.total_pages)
            })
        }
    }, [stableDispatch, search])

    const handleFilter = (theFilter) => {
        setFilter(theFilter)
        dispatch(setSearch(''))
        getMovies({filter: theFilter}).then(({data}) => {
            dispatch(setMovies(data.results))
            setTotalPages(data.total_pages)
        })
    }

    const handlePageClick = pageNumber => {
        setPage(pageNumber.selected)
        if(search.length > 2) {
            searchMovies({query: search, page: (pageNumber.selected + 1)}).then(({data}) => {
                stableDispatch(setMovies(data.results))
                setTotalPages(data.totalPages)
            })
        } else {
            getMovies({filter: filter, page: (pageNumber.selected + 1)}).then(({data}) => {
                dispatch(setMovies(data.results))
            })
        }
    }

    return (
        <div className="movie-list">
            <FilterButtons filterSearch={handleFilter} filter={filter} />
            {(movieList.length) ?
                <>
                <ul>
                    {
                        movieList.map((movie, i) => <li key={`movie${i}`}><MovieListItem movie={movie} /></li>) 
                    }
                </ul>
                <div className="pagination">
                    <ReactPaginate 
                        pageCount={totalPages}
                        initialPage={page}
                        pageRangeDisplayed={4}
                        previousLabel="&larr;"
                        nextLabel="&rarr;"
                        breakLabel={"..."}
                        onPageChange={handlePageClick}
                        activeClassName={"on"}
                        marginPagesDisplayed={2}
                        disableInitialCallback={true}
                    />
                </div>
                </> :
                <div className="center">No Results were Found</div>
            }
            
        </div>
    )
}

export default Movies
