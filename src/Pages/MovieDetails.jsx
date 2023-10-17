import { getMovieDetails } from 'fetchMovies';
import React, { useState, useEffect, useRef, Suspense } from 'react';

import { Link, Outlet, useParams, useLocation } from 'react-router-dom';
import details from './MovieDetails.module.css';
import { Loader } from 'components/Loader/Loader';

const MovieDetails = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [detailsData, setDetailsData] = useState(null);
  const BASE_IMG = 'https://image.tmdb.org/t/p/w300';
  const { movieId } = useParams();
  const location = useLocation();
  const linkBack = useRef(location.state?.from ?? '/movies');

  useEffect(() => {
    async function getDetails() {
      try {
        setIsLoading(true);

        const response = await getMovieDetails(movieId);
        setDetailsData(response);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
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
          <span className={details.goBackBtnTag}>Go back</span>
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
              className={details.detailsImg}
              src={`${BASE_IMG}${detailsData.data.poster_path}`}
              alt={detailsData.data.title}
            />
          </div>

          <div className={details.detailsDescr}>
            <p className={details.detailsDescrTitle}>
              <span className={details.detailsSummary}>Overview: </span>
              {detailsData.data.overview}
            </p>

            <p className={details.detailsDescrTitle}>
              <span className={details.detailsSummary}>Genres: </span>
              {detailsData.data.genres.map(({ id, name }) => (
                <span className={details.detailsSummaryGenres} key={id}>
                  {name}&nbsp;
                </span>
              ))}
            </p>
            <p className={details.detailsDescrTitle}>
              <span className={details.detailsSummary}>Avarage: </span>
              {detailsData.data.vote_average}
            </p>

            <p className={details.detailsDescrTitle}>
              <span className={details.detailsSummary}>Release Date: </span>
              {detailsData.data.release_date}
            </p>
          </div>
          <ul className={details.buttons}>
            <li>
              <Link className={details.buttonsItem} to="cast">
                Cast
              </Link>
            </li>
            <li>
              <Link className={details.buttonsItem} to="reviews">
                Reviews
              </Link>
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
