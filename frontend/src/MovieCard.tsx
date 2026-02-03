import { useNavigate } from "react-router-dom";

type Props = {
  movie: any;
};

const MovieCard = ({ movie }: Props) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/movie/${movie.imdbID}`)}
      style={{
        background: "#1f1f1f",
        padding: "10px",
        cursor: "pointer"
      }}
    >
      <img
        src={movie.Poster !== "N/A" ? movie.Poster : ""}
        alt={movie.Title}
        style={{ width: "100%" }}
      />
      <h4>{movie.Title}</h4>
      <p>{movie.Year}</p>
    </div>
  );
};

export default MovieCard;
