import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getMovieDetails } from "./services/omdbApi";

const MovieDetailPage = () => {
  const { imdbID } = useParams();
  const [movie, setMovie] = useState<any>(null);

  useEffect(() => {
    if (!imdbID) return;

    const fetchDetails = async () => {
      const data = await getMovieDetails(imdbID);
      setMovie(data);
    };

    fetchDetails();
  }, [imdbID]);

  if (!movie) return <p>Loading...</p>;

  return (
    <div style={{ padding: "20px", color: "white" }}>
      <img src={movie.Poster} alt={movie.Title} />
      <h1>{movie.Title}</h1>
      <p><strong>Year:</strong> {movie.Year}</p>
      <p><strong>Genre:</strong> {movie.Genre}</p>
      <p><strong>IMDb Rating:</strong> {movie.imdbRating}</p>
      <p>{movie.Plot}</p>
    </div>
  );
};

export default MovieDetailPage;
