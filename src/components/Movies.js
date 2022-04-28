import { useState, useEffect } from "react";
import * as movieApi from './APIfetch/APIfetch';
import { TodayMoviesList, TodayMoviesTitle, MoviesItem } from '../components/TodayMovies/todayMovies-styled';
import { NavLink } from 'react-router-dom';

export default function MoviesPage() {
    const [movies, setMovies] = useState([]);
    useEffect(() => {
        movieApi.fetchSearch('batman').then(data => setMovies(data.results));
    })

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