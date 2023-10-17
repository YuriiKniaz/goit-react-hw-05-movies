import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import item from './MovieItem.module.css';
export const MovieItem = ({ id, poster_path, title, vote_average }) => {
  const location = useLocation();
  const BASE_IMG = 'https://image.tmdb.org/t/p/w300';

  return (
    <li className={item.item} key={id}>
      <Link
        className={item.itemLink}
        to={`/movies/${id}`}
        state={{ from: location }}
      >
        <img
          className={item.itemImg}
          src={`${BASE_IMG}${poster_path}`}
          alt={title}
        />
        <div className={item.descrWrapper}>
          <h3 className={item.itemTitle}>{title}</h3>
          <p className={item.itemRating}>Rating: {vote_average}</p>
        </div>
      </Link>
    </li>
  );
};
