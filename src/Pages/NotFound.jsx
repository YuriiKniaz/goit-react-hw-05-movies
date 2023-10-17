import React from 'react';
import { Link } from 'react-router-dom';
import not from './NotFound.module.css';

const NotFound = () => {
  return (
    <div className={not.notFoundWrapper}>
      <span className={not.notFoundText}>
        Error occurred, try again or go back to home page:&nbsp;
        <Link className={not.notFoundLink} to="/">
          Home
        </Link>
      </span>
    </div>
  );
};

export default NotFound;
