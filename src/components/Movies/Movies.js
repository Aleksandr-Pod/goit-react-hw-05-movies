import { useState, useEffect } from "react";
import * as movieApi from '../APIfetch/APIfetch';
import { useSearchParams } from 'react-router-dom';
import toastr from "toastr";
import MoviesList from "./MoviesList";
import { Form } from './Movies-styled'

toastr.options = {
    "progressBar": true,
    "positionClass": "toast-top-left",
    "timeOut": "3000",
    "extendedTimeOut": "1000",
}

export default function MoviesPage() {
  const [movies, setMovies] = useState();
  const [value, setValue] = useState("");
  const [searchParams, setSearchParams] = useSearchParams({});
  const [searchName, setSearchName] = useState(() => searchParams.get("search") ?? "" );

  useEffect(() => {
    if (!searchName.trim()) return;
    movieApi.fetchSearch(searchName)
      .then(data => {
        if (!data.results) {
          toastr.error(data); // ошибка сети
          return;
        }
        if (data.total_results === 0) {
          toastr.error("No results"); // нет результата
          setMovies();
          return;
        }
      setMovies(data.results);
      setSearchParams({ search: searchName });
  })
  }, [searchName, setSearchParams]);

  const onChange = e => setValue(e.target.value);
  
  const onSubmit = e => {
    e.preventDefault();
    setSearchName(value.trim());
  }
  
  return (
    <>
      <Form>
        <label>Imput movie name
          <input type="text" value={value} onChange={onChange}></input>
        </label>
        <button onClick={onSubmit}>Search</button>  
      </Form>
      {movies &&
        <MoviesList
          title="Searched movies"
          movies={movies}
          path={''} />
      }
      </>
  )
}