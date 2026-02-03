import { useState } from "react";
import SearchBar from "./SearchBar/SearchBar";
import MovieList from "./MovieList/MovieList";

const HomePage = () => {
  const [movies, setMovies] = useState<any[]>([]);

  return (
    <div style={{ padding: "20px" }}>
      <SearchBar onResults={setMovies} />
      <MovieList movies={movies} />
    </div>
  );
};

export default HomePage;
