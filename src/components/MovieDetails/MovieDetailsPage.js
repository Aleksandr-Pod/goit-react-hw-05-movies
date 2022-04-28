import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import * as APIfetch from '../APIfetch/APIfetch';
import { MovieDetailsBlock, MovieDetailsInfo } from './MovieDetails-styled';

export default function MovieDetailsPage() {
    const { movieId } = useParams();
    const [movie, setMovie] = useState({});

    useEffect(() => {
        APIfetch.fetchMovieById(movieId).then(setMovie)
    }, [movieId, setMovie]);

    console.log(movie);
    
    // const genres = movie.genres.map(el => el.name).join(", ");
    return (
        <MovieDetailsBlock> 
            <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title} width="320"></img>
            <MovieDetailsInfo>
                <h3>{movie.title} ({movie.release_date})</h3>
                <h4>Overview</h4>
                <p>{movie.overview}</p>
                <h4>Genres</h4> 
                <p>{movie.genres && movie.genres.map(el => el.name).join(", ")}</p>
            </MovieDetailsInfo>
        </MovieDetailsBlock>
    )
}