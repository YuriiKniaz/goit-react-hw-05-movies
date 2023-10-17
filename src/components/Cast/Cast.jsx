import React, { useEffect, useState } from 'react';
import { getMovieCredits } from 'fetchMovies.js';
import { useParams } from 'react-router-dom';
import { Actors } from 'components/Actors/Actors';
import cast from './Cast.module.css';

export const Cast = () => {
  const [castData, setCastData] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    async function getCast() {
      try {
        const presponse = await getMovieCredits(movieId);

        setCastData(presponse.data.cast);
      } catch (error) {
        console.log(error.message);
      }
    }

    getCast();
  }, [movieId]);

  return (
    <ul className={cast.castList}>
      {castData.map(({ id, name, profile_path, character }) => (
        <li className={cast.castListItem} key={id}>
          <Actors
            name={name}
            profile_path={profile_path}
            character={character}
          />
        </li>
      ))}
    </ul>
  );
};
