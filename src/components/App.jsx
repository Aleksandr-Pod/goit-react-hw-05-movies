import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
// import HomePage from "./HomePage";
// import MoviesPage from './Movies';
// import MovieDetailsPage from "./MovieDetails/MovieDetailsPage";
// import Cast from "./Cast/Cast";
// import Reviews from "./Reviews";
// import TodayMovies from "./TodayMovies/TodayMovies";

const HomePage = lazy(() => import('./HomePage'));
const MoviesPage = lazy(() => import('./Movies'));
const MovieDetailsPage = lazy(() => import('./MovieDetails/MovieDetailsPage'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews'));
const TodayMovies = lazy(() => import('./TodayMovies/TodayMovies'));
// const MoviesList = lazy(() => import('./MoviesList'));

export const App = () => {
  return (
    <div>
      <Suspense>
      <Routes>
        <Route path="/" element={<HomePage />} >
          <Route index element={<TodayMovies />} />
          <Route path="movies" element={<MoviesPage />} />
          <Route path="movies/:movieId" element={<MovieDetailsPage />} >
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews /> }/>
          </Route>  
        </Route>          
      </Routes>
      </Suspense>
    </div>
  );
};
