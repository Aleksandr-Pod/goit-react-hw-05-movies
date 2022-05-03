import { useState, useEffect } from 'react';
import * as movieApi from '../APIfetch/APIfetch';
import MoviesList from "../Movies/MoviesList";

export default function TodayMovies() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        if (movies.length !== 0) return;
        movieApi.fetchForADay().then(data => setMovies(data.results));
    }, [movies]);

    return (
        <MoviesList
            title="Today's Movies"
            movies={movies}
            prePath={'movies/'} />
  )
}