const URL = 'https://api.themoviedb.org';
const API_KEY = 'e2b1fd67e69bae9f083d3c611e2b6f41';
const page = 1;

export const fetchForADay = () => {
  console.log("fetching today's movies..");
  return fetch(`${URL}/3/trending/movie/day?api_key=${API_KEY}&page=${page}`)
    .then(r => r.json())
    .catch(err => err)
}

export const fetchSearch = (query) => {
  console.log("fetching by searchName..");
  return fetch(`${URL}/3/search/movie?api_key=${API_KEY}&query=${query}&page=${page}`)
    .then(r => r.json())
    .catch(err => err)
}

export const fetchMovieById = (movieId) => {
  console.log("fetching by Id..");
  return fetch(`${URL}/3/movie/${movieId}?api_key=${API_KEY}`)
    .then(r => r.json())
    .catch(err => err);
}
export const fetchReviews = (movieId) => {
  console.log("fetching Review..");
  return fetch(`${URL}/3/movie/${movieId}/reviews?api_key=${API_KEY}`)
    .then(r => r.json())
    .catch(err => err);
}
export const fetchCast = (movieId) => {
  console.log("fetching Cast..");
  return fetch(`${URL}/3/movie/${movieId}/credits?api_key=${API_KEY}`)
    .then(r => r.json())
    .catch(err => err);
}



    