import MovieCard from "./MovieCard/MovieCard";

const MovieList = ({ movies }: { movies: any[] }) => {
  if (!movies.length) return <p>No results</p>;

  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}>
      {movies.map((movie) => (
        <MovieCard key={movie.imdbID} movie={movie} />
      ))}
    </div>
  );
};

export default MovieList;
