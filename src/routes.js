import React from "react";
import { Route, Switch } from "react-router-dom";

import Movies from './components/movies'
import Movie from './components/movie'

const Routes = () => {
    return (
    <Switch>
        <Route path="/" exact component={Movies} />
        <Route path="/movie/:movie_id(\d+)" exact component={Movie} />
    </Switch>
    )
}

export default Routes
