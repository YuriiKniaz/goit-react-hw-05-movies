import React, { useState, useEffect } from 'react';
import { getMovieTrends } from 'fetchMovies';
import { MovieList } from 'components/MovieList/MovieList';

const HomePage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function getTrends() {
      try {
        const movies = await getMovieTrends();
        setMovies(movies.data.results);
      } catch (error) {
        console.log(error.message);
      }
    }

    getTrends();
  }, []);

  return (
    <div>
      <h1>Trends this day</h1>
      <MovieList movies={movies} />
    </div>
  );
};

export default HomePage;
