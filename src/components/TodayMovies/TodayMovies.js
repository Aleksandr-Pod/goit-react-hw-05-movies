import { useState, useEffect } from 'react';
import * as movieApi from '../APIfetch/APIfetch';
import { MoviesList, MoviesTitle, MoviesItem } from './Movies-styled';
import { NavLink } from 'react-router-dom';

export default function TodayMovies() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        if (movies.length !== 0) return;
        movieApi.fetchForADay().then(data => setMovies(data.results));
    }, [movies]);

    return (
        <MoviesList>
            <MoviesTitle>Список фильмов за день</MoviesTitle>
            {movies.map(el => (
                <MoviesItem key={el.id}>
                    <NavLink to={`movies/${el.id}`}>{el.title}</NavLink>
                </MoviesItem>
            ))}
        </MoviesList>
    )
}