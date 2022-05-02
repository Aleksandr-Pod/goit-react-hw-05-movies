import { MoviesBox, MoviesTitle, MoviesItem } from './Movies-styled';
import { NavLink } from 'react-router-dom';

export default function MoviesList({ movies, title, prePath }) {
    return (
        <MoviesBox>
            <MoviesTitle>{title}</MoviesTitle>
            {movies.map(el => (
                <MoviesItem key={el.id}>
                    <NavLink to={`${prePath}${el.id}`}>{el.title}</NavLink>
                </MoviesItem>
            ))}
        </MoviesBox>
    )
}