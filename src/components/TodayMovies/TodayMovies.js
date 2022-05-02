import { useState, useEffect } from 'react';
import * as movieApi from '../APIfetch/APIfetch';
// import { NavLink } from 'react-router-dom';
import MoviesList from 'components/MoviesList';

export default function TodayMovies() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        if (movies.length !== 0) return;
        movieApi.fetchForADay().then(data => setMovies(data.results));
    }, [movies]);

  return (
    <>
      <MoviesList
        title="Todays Movies"
        movies={movies} />
    </>
  )
}