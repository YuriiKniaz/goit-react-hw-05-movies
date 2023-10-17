import React from 'react';

export const ReviewItem = ({ author, content }) => {
  return (
    <>
      <p>{author}</p>
      <p>{content}</p>
    </>
  );
};
