import { Link } from "react-router-dom";

const MovieCard = ({ movie }: { movie: any }) => {
  return (
    <Link to={`/movie/${movie.imdbID}`}>
      <div>
        <img src={movie.Poster} alt={movie.Title} width="150" />
        <h4>{movie.Title}</h4>
        <p>{movie.Year}</p>
      </div>
    </Link>
  );
};

export default MovieCard;
