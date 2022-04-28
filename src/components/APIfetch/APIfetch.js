const URL = 'https://api.themoviedb.org';
const API_KEY = 'e2b1fd67e69bae9f083d3c611e2b6f41';
const page = 1;

export const fetchForADay = () => {
return fetch(`${URL}/3/trending/movie/day?api_key=${API_KEY}&page=${page}`)
    .then(r => r.json())
    .catch(data => data);
}

export const fetchSearch = async (query) => {
  try {
        const r = await fetch(`${URL}/3/search/movie?api_key=${API_KEY}&query=${query}&page=${page}`);
        return await r.json();
    } catch (data) {
        return data;
    }
}

export const fetchMovieById = async (movieId) => {
  try {
        const r = await fetch(`${URL}/3/movie/${movieId}?api_key=${API_KEY}`);
        return await r.json();
    } catch (data) {
        return data;
    }
}