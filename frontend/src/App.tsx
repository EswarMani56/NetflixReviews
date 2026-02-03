import { Routes, Route } from "react-router-dom";
import HomePage from "./HomePage/HomePage";
import MovieDetailPage from "../MovieDetailPage/MovieDetailPage";
import Navbar from "../Navbar/Navbar";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movie/:imdbID" element={<MovieDetailPage />} />
      </Routes>
    </>
  );
};

export default App;
