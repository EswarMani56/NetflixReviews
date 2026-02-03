const API_KEY = "f3baa6ae"; // later move to env
const BASE_URL = "https://www.omdbapi.com/";

export async function searchMovies(query: string) {
  const res = await fetch(
    `${BASE_URL}?apikey=${API_KEY}&s=${encodeURIComponent(query)}`
  );
  return res.json();
}

export async function getMovieById(imdbID: string) {
  const res = await fetch(
    `${BASE_URL}?apikey=${API_KEY}&i=${imdbID}&plot=full`
  );
  return res.json();
}
