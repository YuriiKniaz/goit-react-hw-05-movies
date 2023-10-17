import React, { useState, useEffect } from 'react';
import { getSearchMovie } from 'fetchMovies';
import { MovieList } from 'components/MovieList/MovieList';
import { Loader } from 'components/Loader/Loader';
import { useSearchParams } from 'react-router-dom';
import movieSearch from './MovieSearch.module.css';

const MovieSearch = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [loadMore, setLoadMore] = useState(false);
  const [moviesQuery, setMoviesQuery] = useState([]);
  const [page, setPage] = useState(1);
  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get('query') ?? '';

  useEffect(() => {
    if (!query) return setLoadMore(false);
  }, [query]);

  useEffect(() => {
    if (!query) return setMoviesQuery([]);

    async function getMovies() {
      try {
        setIsLoading(true);
        setIsError(false);

        const response = await getSearchMovie(query, page);

        if (page === 1) {
          setMoviesQuery(response.data.results);
        } else {
          setMoviesQuery(movies => [...movies, ...response.data.results]);
          setLoadMore(
            response.data.total_pages <
              Math.ceil(response.data.total_result / 20)
          );
        }
        setLoadMore(true);
        setIsLoading(false);
      } catch {
        setIsError(true);
        setIsLoading(false);
      }
    }

    getMovies();
  }, [searchParams, page, query]);

  const onLoadMore = () => {
    setPage(page => page + 1);
  };

  const queryRequest = e => {
    if (e.target.value === '') {
      return setSearchParams({});
    }
    setSearchParams({ query: e.target.value });
  };

  return (
    <div className={movieSearch.container}>
      <div className={movieSearch.searchWrapper}>
        <p className={movieSearch.searchPrg}>Search</p>
        <input
          className={movieSearch.searchInput}
          type="text"
          placeholder="Type in the movie/show name"
          value={query}
          onChange={queryRequest}
        />
      </div>
      {isLoading && <Loader />}
      {isError ? (
        <span className={movieSearch.error}>
          Error occurred, try again in few seconds
        </span>
      ) : (
        moviesQuery.length > 0 && <MovieList moviesData={moviesQuery} />
      )}
      {loadMore && (
        <button
          className={movieSearch.loadMore}
          type="button"
          onClick={onLoadMore}
        >
          Load More
        </button>
      )}
    </div>
  );
};

export default MovieSearch;
