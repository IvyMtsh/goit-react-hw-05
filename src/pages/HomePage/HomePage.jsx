import { useEffect, useState } from "react";
import { getTrendMovies } from "../../api";
import css from "./HomePage.module.css";
import MoviesList from "../../components/MoviesList/MoviesList";
export default function HomePage() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchTrendMovies() {
      try {
        setLoading(true);
        const data = await getTrendMovies();
        setMovies(data);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchTrendMovies();
  }, []);

  return (
    <div>
      <h1 className={css.tittle}>Популярні сьогодні</h1>
      {loading && <b>Завантаження фільмів</b>}
      {error && <b>Помилка завантаження фільмів</b>}
      {movies.length > 0 && <MoviesList movies={movies} />}
    </div>
  );
}
