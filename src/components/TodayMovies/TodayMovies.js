import { useState, useEffect } from 'react';
import * as movieApi from '../APIfetch/APIfetch';
import { TodayMoviesList, TodayMoviesTitle, MoviesItem } from './todayMovies-styled';
import { NavLink } from 'react-router-dom';

export default function TodayMovies() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        if (movies.length !== 0) return;
        movieApi.fetchForADay().then(data => setMovies(data.results));
       
    }, [movies]);

    console.log(movies);

    return (
        <TodayMoviesList>
            <TodayMoviesTitle>Список фильмов за день</TodayMoviesTitle>
            {movies.map(el => (
                <MoviesItem key={el.id}>
                    <NavLink to={`movies/${el.id}`}>{el.title}</NavLink>
                </MoviesItem>
            ))}
        </TodayMoviesList>
    )
}