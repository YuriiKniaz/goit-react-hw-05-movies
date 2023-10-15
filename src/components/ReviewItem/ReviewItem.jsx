import React from 'react';

export const ReviewItem = ({ author, content }) => {
  return (
    <div>
      <p>{author}</p>
      <p>{content}</p>
    </div>
  );
};
