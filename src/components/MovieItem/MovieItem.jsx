import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export const MovieItem = ({ movieId, poster_path, title }) => {
  const location = useLocation();
  const BASE_IMG = 'https://image.tmdb.org/t/p/w500';

  return (
    <li>
      <Link to={`/movie/${movieId}`} state={{ from: location }}>
        <img src={`${BASE_IMG}${poster_path}`} alt={title} />
      </Link>
    </li>
  );
};
