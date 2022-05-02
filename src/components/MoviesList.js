import { MoviesBox, MoviesTitle, MoviesItem } from './Movies-styled';
import { NavLink } from 'react-router-dom';

export default function MoviesList({movies, title}) {
    <MoviesBox>
        <MoviesTitle>{title}</MoviesTitle>
        {movies.map(el => (
            <MoviesItem key={el.id}>
                <NavLink to={`movies/${el.id}`}>{el.title}</NavLink>
            </MoviesItem>
        ))}
    </MoviesBox>
}