import React from 'react';
import actors from './Actors.module.css';

export const Actors = ({ name, profile_path, character }) => {
  const BASE_IMG = 'https://image.tmdb.org/t/p/w500';
  return (
    <div className={actors.wrapper}>
      <img
        className={actors.actorsImg}
        src={`${BASE_IMG}${profile_path}`}
        alt={name}
      />
      <p className={actors.name}>{name}</p>
      <p className={actors.character}>Played: {character}</p>
    </div>
  );
};
