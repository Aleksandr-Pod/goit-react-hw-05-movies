import { Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import MoviesPage from './Movies';
import MovieDetailsPage from "./MovieDetailsPage";
import Cast from "./Cast";
import Reviews from "./Reviews";
import TodayMovie from "./TodayMovie";

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} >
          <Route index element={<TodayMovie />} />
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
