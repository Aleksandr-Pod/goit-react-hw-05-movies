import { useState, useEffect } from "react";
import * as movieApi from './APIfetch/APIfetch';
import { MoviesList, MoviesTitle, MoviesItem } from './TodayMovies/Movies-styled';
import { NavLink } from 'react-router-dom';
import toastr from "toastr";

toastr.options = {
    "progressBar": true,
    "positionClass": "toast-top-left",
    "timeOut": "3000",
    "extendedTimeOut": "1000",
    "showMethod": "fadeIn",
    "hideMethod": "fadeOut"
  }

export default function MoviesPage() {
  const [movies, setMovies] = useState();
  const [value, setValue] = useState("");
  const [searchName, setSearchName] = useState("");
  
  useEffect(() => {
    if (!searchName) return;
    movieApi.fetchSearch(searchName)
      .then(data => {
        if (data.results.length === 0) {
          toastr.error("No results");
          setMovies();
          return;
        }
        setMovies(data.results);
      })
  }, [searchName])
  const onChange = e => setValue(e.target.value);
  
  const onSubmit = e => {
    e.preventDefault();
    setSearchName(value);
  }

  return (
      <>
          <form>
              <label>Imput movie name 
                  <input type="text" value={value} onChange={onChange}></input>
              </label>
              <button onClick={onSubmit}>Search</button>  
          </form>
          {movies &&
              <MoviesList>
                  <MoviesTitle>Список фильмов по запросу {searchName}</MoviesTitle>
                  {movies.map(el => (
                      <MoviesItem key={el.id}>
                          <NavLink to={`${el.id}`}>{el.title}</NavLink>
                      </MoviesItem>
                  ))}
              </MoviesList>
          }
      </>
  )
}