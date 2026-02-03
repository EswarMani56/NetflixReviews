import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getMovieById } from "../src/services/omdbApi";

const MovieDetailPage = () => {
  const { imdbID } = useParams();
  const [movie, setMovie] = useState<any>(null);

  useEffect(() => {
    if (imdbID) {
      getMovieById(imdbID).then(setMovie);
    }
  }, [imdbID]);

  if (!movie) return <p>Loading...</p>;

  return (
    <div>
      <h1>{movie.Title}</h1>
      <img src={movie.Poster} alt={movie.Title} />
      <p>{movie.Plot}</p>
      <p>⭐ {movie.imdbRating}</p>
    </div>
  );
};

export default MovieDetailPage;
