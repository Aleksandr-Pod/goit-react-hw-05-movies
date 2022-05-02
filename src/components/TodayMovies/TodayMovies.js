import { useState, useEffect } from 'react';
import * as movieApi from '../APIfetch/APIfetch';
// import { MoviesBox, MoviesTitle, MoviesItem } from '../Movies-styled';
// import { NavLink } from 'react-router-dom';
import MoviesList from "../MoviesList";

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
    // <MoviesBox>
    //     <MoviesTitle>Today's Movies</MoviesTitle>
    //     {movies.map(el => (
    //         <MoviesItem key={el.id}>
    //             <NavLink to={`movies/${el.id}`}>{el.title}</NavLink>
    //         </MoviesItem>
    //     ))}
    // </MoviesBox>
  )
}