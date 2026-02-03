import { useState } from "react";
import { searchMovies } from "../../services/omdbApi";

const SearchBar = ({ onResults }: { onResults: (m: any[]) => void }) => {
  const [query, setQuery] = useState("");

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    const data = await searchMovies(query);

    if (data.Response === "True") {
      onResults(data.Search);
    } else {
      onResults([]);
    }
  };

  return (
    <form onSubmit={handleSearch}>
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search movies..."
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;
