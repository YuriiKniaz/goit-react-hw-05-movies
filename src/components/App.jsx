import { Route, Routes } from 'react-router-dom';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { Cast } from './Cast/Cast';
import { Review } from './Review/Review';
import { lazy } from 'react';

const HomePage = lazy(() => import('../Pages/HomePage'));
const MovieSearch = lazy(() => import('../Pages/MovieSearch'));
const MovieDetails = lazy(() => import('../Pages/MovieDetails'));
const NotFound = lazy(() => import('../Pages/NotFound'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route path="movies" element={<MovieSearch />} />
        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="review" element={<Review />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};
