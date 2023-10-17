import React, { useState, useEffect } from 'react';
import { getMovieTrends } from 'fetchMovies';
import { MovieList } from 'components/MovieList/MovieList';
import home from './HomePage.module.css';

const HomePage = () => {
  const [moviesData, setMoviesData] = useState([]);

  useEffect(() => {
    async function getTrends() {
      try {
        const response = await getMovieTrends();
        setMoviesData(response.data.results);
      } catch (error) {
        console.log(error.message);
      }
    }

    getTrends();
  }, []);

  return (
    <div className={home.container}>
      <h1 className={home.title}>Trends this day</h1>
      <MovieList moviesData={moviesData} />
    </div>
  );
};

export default HomePage;
