import React from 'react';
import rewiewItem from './ReviewItem.module.css';
export const ReviewItem = ({ author, content }) => {
  return (
    <>
      <p className={rewiewItem.author}>{author}&nbsp;</p>
      <p className={rewiewItem.content}>{content}&nbsp;</p>
    </>
  );
};
