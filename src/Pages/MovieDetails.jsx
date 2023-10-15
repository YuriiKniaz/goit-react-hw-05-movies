import { getMovieDetails } from 'fetchMovies';
import React, { useState, useEffect, useRef, Suspense } from 'react';

import { Link, Outlet, useParams, useLocation } from 'react-router-dom';
import details from './MovieDetails.module.css';
import { Loader } from 'components/Loader/Loader';

const MovieDetails = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [detailsData, setDetailsData] = useState('');
  const BASE_IMG = 'https://image.tmdb.org/t/p/w500';
  const { movieId } = useParams();
  const location = useLocation();
  const linkBack = useRef(location.state?.from ?? '/movies');

  useEffect(() => {
    async function getDetails() {
      try {
        setIsLoading(true);

        const details = await getMovieDetails(movieId);
        setDetailsData(details);
        setIsLoading(false);
      } catch (error) {
        setIsError(true);
        setIsLoading(false);
      }
    }

    getDetails();
  }, [movieId]);

  return (
    <div className={details.container}>
      <button className={details.goBackBtn}>
        <Link to={linkBack.current}>
          <span>&#10229;</span>
        </Link>
      </button>
      {isLoading && <Loader />}
      {isError && (
        <span className={details.error}>
          Error occurred, try again in few seconds
        </span>
      )}
      {detailsData && (
        <div className={details.detailsWrapper}>
          <div className={details.imgWrapper}>
            <img
              src={`${BASE_IMG}${detailsData.data.poster_path}`}
              alt={detailsData.data.title}
            />
          </div>

          <div className={details.detailsDescr}>
            <p className={details.detailsDescrTitle}>
              Overview:
              <span className={details.detailsSummary}>
                {detailsData.data.overview}
              </span>
            </p>

            <p className={details.detailsDescrTitle}>
              Genres:
              {detailsData.data.map(({ id, name }) => (
                <span className={details.detailsSummary} key={id}>
                  {name}
                </span>
              ))}
            </p>
            <p className={details.detailsDescrTitle}>
              <span className={details.detailsSummary}>
                Avarage: {detailsData.data.vote_avarage}
              </span>
            </p>

            <p className={details.detailsDescrTitle}>
              <span className={details.detailsSummary}>
                Release Date: {detailsData.data.release_date}
              </span>
            </p>
          </div>
          <ul className={details.buttons}>
            <li className={details.buttonsItem}>
              <Link to={'cast'}>Cast</Link>
            </li>
            <li className={details.buttonsItem}>
              <Link to={'reviews'}>Reviews</Link>
            </li>
          </ul>
        </div>
      )}

      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default MovieDetails;
