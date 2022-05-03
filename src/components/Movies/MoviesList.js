import { MoviesBox, MoviesTitle, MoviesItem } from './Movies-styled';
import { Link, useLocation } from 'react-router-dom';

export default function MoviesList({ movies, title, prePath }) {
    const location = useLocation();
    return (
        <MoviesBox>
            <MoviesTitle>{title}</MoviesTitle>
            {movies.map(el => (
                <MoviesItem key={el.id}>
                    <Link to={`${prePath}${el.id}`} state={{ from: location }}>{el.title}</Link>
                </MoviesItem>
            ))}
        </MoviesBox>
    )
}