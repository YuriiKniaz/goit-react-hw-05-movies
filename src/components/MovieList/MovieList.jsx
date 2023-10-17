import React from 'react';
import { MovieItem } from 'components/MovieItem/MovieItem';
import movieList from './MovieList.module.css';

export const MovieList = ({ moviesData }) => {
  return (
    <ul className={movieList.movieList}>
      {moviesData.map(({ id, poster_path, title, vote_average }) => (
        <MovieItem
          key={id}
          poster_path={poster_path}
          title={title}
          vote_average={vote_average}
          id={id}
        />
      ))}
    </ul>
  );
};
