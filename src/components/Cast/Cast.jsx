import React, { useEffect, useState } from 'react';
import { getMovieCredits } from 'fetchMovies.js';
import { useParams } from 'react-router-dom';
import { Actors } from 'components/Actors/Actors';

export const Cast = () => {
  const [castData, setCastData] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    async function getCast() {
      try {
        const cast = await getMovieCredits(movieId);
        console.log(cast);
        setCastData(cast.data.cast);
      } catch (error) {
        console.log(error.message);
      }
    }

    getCast();
  }, [movieId]);

  return (
    <ul>
      {castData.map(({ id, name, profile_path, character }) => (
        <li key={id}>
          <Actors
            nmae={name}
            profile_path={profile_path}
            character={character}
          />
        </li>
      ))}
    </ul>
  );
};
