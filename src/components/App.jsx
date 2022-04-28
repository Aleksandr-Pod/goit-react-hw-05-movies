import { Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import MoviesPage from './Movies';
import MovieDetailsPage from "./MovieDetails/MovieDetailsPage";
import Cast from "./Cast";
import Reviews from "./Reviews";
import TodayMovies from "./TodayMovies/TodayMovies";

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} >
          <Route index element={<TodayMovies />} />
          <Route path="movies" element={<MoviesPage />} />
          <Route path="movies/:movieId" element={<MovieDetailsPage />} >
            <Route path="cast" element={<Cast />} />
            <Route path="review" element={<Reviews /> }/>
          </Route>  
        </Route>          
      </Routes>
    </div>
  );
};
