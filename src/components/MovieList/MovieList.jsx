import React from 'react';
import { MovieItem } from 'components/MovieItem/MovieItem';
import movieList from './MovieList.module.css';

export const MovieList = ({ movies }) => {
  return (
    <ul className={movieList.movieList}>
      {movies.map(({ id, poster_path, title, name }) => (
        <MovieItem key={id} poster_path={poster_path} title={name ?? title} />
      ))}
    </ul>
  );
};
