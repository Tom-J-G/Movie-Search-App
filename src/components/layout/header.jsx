import React from 'react'
import SearchForm from './search/searchForm'

//header
const Header = () => (
        <header>
            <a href="/"><h1>Movie Search</h1></a>
            <SearchForm />
        </header>
)

export default Header