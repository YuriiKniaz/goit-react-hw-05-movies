import React, { useState, useEffect } from 'react';
import { getMovieReviews } from 'fetchMovies';
import { useParams } from 'react-router-dom';
import { ReviewItem } from 'components/ReviewItem/ReviewItem';

export const Review = () => {
  const [reviewsData, setReviewData] = useState('');
  const { movieId } = useParams();

  useEffect(() => {
    async function getReviews() {
      try {
        const reviews = await getMovieReviews(movieId);
        setReviewData(reviews.data.results);
      } catch (error) {
        console.log(error.message);
      }
    }
    getReviews();
  }, [movieId]);

  return (
    <div>
      {reviewsData.map(({ id, author, content }) => (
        <li key={id}>
          <ReviewItem author={author} content={content} />
        </li>
      ))}
    </div>
  );
};
